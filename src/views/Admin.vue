<template>
  <div class="home font-basic">
    <ContentTop />
    <div v-if="loggedIn" class="content-main content-bg">
      <div class="container">
        <!-- BEGIN col-12 -->
        <div class="col-lg-12 ps-lg-5">
          <div class="title-1 pt-4">상담 신청 내역</div>
          <!-- BEGIN result-header -->
          <div class="d-flex align-items-center fw-bold text-gray-600 mb-4">
            <div class="ms-auto d-flex align-items-center">
              <span class="me-3">Results per page:</span>
              <select
                v-model="resultPerPage"
                class="form-select form-select-sm w-80px"
              >
                <option value="5">5</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <!-- END result-header -->

          <div
            class="p-2 bg-light position-relative border-success border-5 border-start mb-2"
            v-for="consult in formattedConsults"
            :key="consult.id"
          >
            <div class="time fs-16px ps-2 mb-1 fw-bolder line-h-11 text-start">
              {{ consult.time }}
              <span class="time-ago">{{ consult.timeago }}</span
              ><button
                type="button"
                @click="showDeleteModal(consult.id, consult.name)"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <!-- BEGIN row -->
            <div class="row">
              <!-- BEGIN col-4 -->
              <div class="col-4 ps-4 pb-1">
                <div class="d-flex align-items-center">
                  <div
                    class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center"
                  >
                    <i class="far fa-fw fa-user fa-lg"></i>
                  </div>
                  <div>
                    <div
                      class="fw-bold text-start text-gray-600 fs-12px line-h-12"
                    >
                      NAME:
                    </div>
                    <div class="fw-bold text-dark">{{ consult.name }}</div>
                  </div>
                </div>
              </div>
              <!-- END col-4 -->
              <!-- BEGIN col-4 -->
              <div class="col-4">
                <div class="d-flex align-items-center">
                  <div
                    class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center"
                  >
                    <i class="fa fa-fw fa-phone fa-lg"></i>
                  </div>
                  <div>
                    <div
                      class="fw-bold text-start text-gray-600 fs-12px line-h-12"
                    >
                      PHONE:
                    </div>
                    <div class="fw-bold text-dark">
                      {{ consult.phone }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- END col-4 -->
              <!-- BEGIN col-4 -->
              <div class="col-4">
                <div class="d-flex align-items-center">
                  <div
                    class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center"
                  >
                    <i class="fa fa-fw fa-briefcase fa-lg"></i>
                  </div>
                  <div>
                    <div
                      class="fw-bold text-start text-gray-600 fs-12px line-h-12"
                    >
                      TYPE:
                    </div>
                    <div class="fw-bold text-dark">{{ consult.loan_type }}</div>
                  </div>
                </div>
              </div>
              <!-- END col-4 -->
            </div>
            <!-- END row -->
          </div>

          <!-- <hr class="opacity-30" /> -->

          <!-- BEGIN pagination -->
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                <a class="page-link" @click="addPage(-1)">Previous</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage == 1 }">
                <button class="page-link" @click="changePage(1)">1</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage == 2 }">
                <button class="page-link" @click="changePage(2)">2</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage == 3 }">
                <button class="page-link" @click="changePage(3)">3</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage >= 3 }">
                <button class="page-link" @click="addPage(1)">Next</button>
              </li>
            </ul>
          </nav>
          <!-- END pagination -->
        </div>
        <!-- END col-12 -->
      </div>
    </div>
    <div v-else class="content-main login-bg">
      <div class="login-bg-wrap">
        <div class="container">
          <Login @logged="handleLoginEmit" />
        </div>
      </div>
    </div>
  </div>

  <ModalAlert
    :showModal="showModal"
    :payload="payload"
    @close="showModal = false"
    @action="handleDelete(id)"
  />
</template>

<script>
import ContentTop from "../components/ContentTop";
import Login from "../components/Login";
import ModalAlert from "../components/ModalAlert";
import getConsults from "../composables/getConsults";
import deleteConsult from "../composables/deleteConsult";
import { ref, computed } from "vue";
import { format, formatDistanceToNow } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
// import { tr } from "date-fns/locale";

export default {
  components: { ContentTop, Login, ModalAlert },
  setup() {
    const loggedIn = ref(true);
    const resultPerPage = ref(5); // 한번에 표시하는 행 수
    const currentPage = ref(1); // 현재 페이지
    const showModal = ref(false); // delete confirm
    const payload = ref({ id: 0, name: "" });

    // 상담 신청 내역 전체 불러오는 함수 -> load
    const { consults, errorGet, load } = getConsults();
    // 상담 신청 내역 개별 삭제하는 함수 -> del
    const { errorDel, del } = deleteConsult();

    // 상담 신청 내역 전체 불러오기 -> consults
    load();

    const formattedConsults = computed(() => {
      if (consults.value) {
        const current = parseInt(currentPage.value);
        const resPerPage = parseInt(resultPerPage.value);
        const start = 0 + (current - 1) * resPerPage;
        const end = resPerPage + (current - 1) * resPerPage;
        // console.log(start + "," + end);
        return consults.value
          .slice(start, end) // 페이징 처리
          .map((con) => {
            // console.log(con.datetime);
            let timestamp = formatInTimeZone(con.datetime, "Asia/Seoul", "T"); // 2021.10.11 10:30:25
            timestamp = parseInt(timestamp);
            let time = format(timestamp, "yyyy-MM-dd HH:mm:ss");

            let timeago = formatDistanceToNow(timestamp) + " 전";
            timeago = timeago
              .replace("about ", "")
              .replace(" days", "일")
              .replace(" day", "일")
              .replace(" hours", "시간")
              .replace(" hour", "시간")
              .replace("less than a minute", "방금")
              .replace(" minutes", "분")
              .replace(" minute", "분");
            return { ...con, time: time, timeago: timeago };
          });
      }
    });

    const changePage = (page) => {
      currentPage.value = page;
      // load(page);
    };
    const addPage = (n) => {
      const page = currentPage.value + n;
      if (page < 1) {
        return;
      }
      changePage(page);
    };

    // 상담 신청 내역의 x 버튼 클릭 시 호출
    const showDeleteModal = (id, name) => {
      // console.log("handleDelete:", id, name);

      // 삭제 모달 창 open
      payload.value.id = id;
      payload.value.name = name;
      showModal.value = true;
    };

    // 삭제 modal의 삭제 버튼 클릭 시 호출
    const handleDelete = async () => {
      const id = payload.value.id;
      const name = payload.value.name;
      showModal.value = false;

      // 실제 삭제 api 리퀘스트
      await del(id);
      console.log(`${name}(${id}) 내역이 정상적으로 삭제 되었습니다.`);

      // 내역 리스트 에서 삭제
      consults.value = consults.value.filter((consult) => {
        return consult.id != id;
      });
      payload.value.id = 0;
      payload.value.name = "";
    };
    const handleLoginEmit = () => {
      loggedIn.value = true;
    };

    return {
      consults,
      formattedConsults,
      currentPage,
      changePage,
      addPage,
      loggedIn,
      handleLoginEmit,
      resultPerPage,
      showDeleteModal,
      handleDelete,
      payload,
      showModal,
    };
  },
};
</script>

<style scoped>
.content-main {
  min-height: 109vh;
}
.login-bg-wrap {
  background: rgba(0, 0, 0, 0.6);
}
.login-bg {
  background-image: url("../assets/img/login-bg.jpg");
}
.content-bg {
  background: linear-gradient(#d7d7d7 80%, #99d1ce);
}
.title-1 {
  font-family: paybooc;
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: -1.3px;
  color: #18939d;
}
.time {
  color: #18939d;
}
.time-ago {
  font-family: ONEMobile;
  font-size: 0.8rem;
  color: #888;
}
.btn-close {
  padding: 0;
  position: absolute;
  right: 8px;
}
.pagination .page-item .page-link {
  border-radius: 0;
}
.page-item.disabled .page-link {
  color: var(--app-component-disabled-color);
  pointer-events: none;
  background-color: var(--app-component-disabled-bg);
  /* border-color: #000000; */
}
.pagination .page-item + .page-item {
  margin-left: 0;
}
.page-item:not(:first-child) .page-link {
  margin-left: 0;
}
.page-link {
  padding: 0.375rem 0.75rem;
}
.page-link {
  position: relative;
  display: block;
  color: rgba(var(--app-component-color-rgb), 0.75);
  background-color: var(--app-component-bg);
  border: 1px solid var(--app-component-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
