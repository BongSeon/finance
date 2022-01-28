<template>
  <div class="form">
    <div class="form-section">
      <div v-if="errorFormMessage" class="error-form-message p-1">
        {{ errorFormMessage }}
      </div>
      <table class="table">
        <tr>
          <td class="table-label label">+ 이름</td>
          <td class="input-field">
            <input
              class="form-control"
              type="text"
              placeholder=""
              name="user_name"
              v-model="userData.user_name"
            />
          </td>
        </tr>
        <tr>
          <td class="table-label label">+ 연락처</td>
          <td class="input-field">
            <input
              class="form-control"
              type="text"
              placeholder="숫자만 입력"
              name="user_phone"
              v-model="userData.user_phone"
            />
          </td>
        </tr>
        <tr>
          <td class="table-label label">+ 분류</td>
          <td class="input-field">
            <select
              class="form-select"
              name="loan_type"
              v-model="userData.loan_type"
            >
              <option value="주택담보대출">주택 담보 대출</option>
              <option value="아파트담보대출" selected>아파트 담보대출</option>
              <option value="공동명의지분대출">공동명의 지분대출</option>
              <option value="무설정아파트신용대출">
                무설정 아파트 신용 대출
              </option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <div class="form-section">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 col-sm-6 px-3">
            <div class="label text-center">+ 개인정보 수집 이용 동의</div>
            <div class="form-check form-check-inline ms-2">
              <input
                class="form-check-input"
                type="radio"
                name="agree-1"
                id="agree-1-t"
                value="option-1"
                @change="handleAgreeRadio(1, true)"
              />
              <label class="form-check-label" for="agree-1-t">동의함</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="agree-1"
                id="agree-1-f"
                value="option-2"
                @change="handleAgreeRadio(1, false)"
              />
              <label class="form-check-label" for="agree-1-f">동의안함</label>
            </div>
            <div class="text-center mb-2">
              <button class="btn btn-agree" @click="handleOpenModal(1)">
                <i class="fas fa-check"></i> <span class="text-1">|</span>
                동의서 확인하기
              </button>
            </div>
          </div>
          <div class="col-12 col-sm-6 px-3">
            <div class="label text-center">+ 개인정보 제공 동의</div>
            <div class="form-check form-check-inline ms-2">
              <input
                class="form-check-input"
                type="radio"
                name="agree-2"
                id="agree-2-t"
                value="option-3"
                @change="handleAgreeRadio(2, true)"
              />
              <label class="form-check-label" for="agree-2-t">동의함</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="agree-2"
                id="agree-2-f"
                value="option-4"
                @change="handleAgreeRadio(2, false)"
              />
              <label class="form-check-label" for="agree-2-f">동의안함</label>
            </div>
            <div class="text-center mb-2">
              <button class="btn btn-agree" @click="handleOpenModal(2)">
                <i class="fas fa-check"></i> <span class="text-1">|</span>
                동의서 확인하기
              </button>
            </div>
          </div>
        </div>
        <div v-if="errorAgreeMessage" class="row error-form-message">
          <p class="text-center">
            {{ errorAgreeMessage }}
          </p>
        </div>
      </div>
      <div></div>
    </div>

    <div class="text-2 px-2">
      ※개인정보 수집 이용 및 제공에 동의하셔야 서비스 이용이 가능합니다.
    </div>
    <div>
      <!-- <button class="btn btn-submit w-150px ms-5px" @click="handleSubmit"> -->
      <button
        class="btn btn-submit ms-5px"
        :class="{ disabled: applied }"
        @click="handleSubmit"
      >
        빠른상담신청
      </button>
    </div>
  </div>

  <!-- 상담신청완료 팝업 Toast -->
  <Toast :showToast="showToast" />

  <!-- Modal창 닫을때 아래 handleCloseModal 함수 호출 -->
  <AgreementForm
    :document="modalNumber"
    :showModal="showModal"
    @close="handleCloseModal"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import postConsult from "../composables/postConsult";
import sendTelegram from "../composables/sendTelegram";
import Toast from "./Toast.vue";
import AgreementForm from "./AgreementForm.vue";

export default {
  components: { Toast, AgreementForm },
  setup() {
    const { error1, post } = postConsult();
    const { sendError, send } = sendTelegram();
    const userData = ref({
      user_name: "",
      user_phone: "",
      loan_type: "주택담보대출",
      datetime: null,
    });
    const showToast = ref(false);
    const showModal = ref(false);
    const modalNumber = ref(1);
    const applied = ref(false);
    const agreeChecked1 = ref(false);
    const agreeChecked2 = ref(false);
    const agreeDocumentConfirm = ref(false);
    const errorFormMessage = ref("");
    const errorAgreeMessage = ref("");

    // 빠른상담신청 버튼 클릭
    const handleSubmit = async () => {
      const postData = {
        name: userData.value.user_name,
        phone: userData.value.user_phone,
        loan_type: userData.value.loan_type,
        // datetime: Date.now(),
      };

      if (postData.name.length < 2) {
        errorFormMessage.value = "이름을 정상적으로 입력해주세요.";
        return;
      }
      if (postData.phone.includes("-")) {
        errorFormMessage.value = "연락처는 숫자만 입력해주세요.";
        return;
      }
      if (postData.phone.length < 9 || postData.phone.length > 11) {
        errorFormMessage.value = "연락처를 정상적으로 입력해주세요.";
        return;
      }
      errorFormMessage.value = "";

      if (!agreeChecked1.value || !agreeChecked2.value) {
        errorAgreeMessage.value = "개인정보 수집 이용 동의함에 체크해주세요.";
        return;
      }
      errorAgreeMessage.value = "";

      // db에 상담신청인 정보 전송
      await post(postData);

      // telegram 문자 봇 발송
      const message = `${postData.name}(${postData.phone})님의 상담신청이 접수되었습니다.`;
      // await send(message);

      showToast.value = true;
      applied.value = true;

      if (sendError.value != null) {
        console.log("에러 발생: " + sendError.value);
      } else {
        console.log("정상처리 완료");
        formInit();
      }
    };
    const formInit = () => {
      userData.value.user_name = "";
      userData.value.user_phone = "";
      agreeChecked1.value = false;
      agreeChecked2.value = false;
    };
    const handleOpenModal = (doc) => {
      modalNumber.value = doc;
      showModal.value = true;
      // 동의서를 읽은 것으로 체크
      agreeDocumentConfirm.value = true;
    };
    const handleCloseModal = () => {
      showModal.value = false;
    };
    const handleAgreeRadio = (radio, bool) => {
      if (radio == 1) {
        agreeChecked1.value = bool;
        console.log("agreeChecked1 ", agreeChecked1.value);
      } else if (radio == 2) {
        agreeChecked2.value = bool;
        console.log("agreeChecked2 ", agreeChecked2.value);
      }
    };

    return {
      handleSubmit,
      userData,
      showToast,
      applied,
      showModal,
      modalNumber,
      agreeChecked1,
      agreeChecked2,
      errorFormMessage,
      errorAgreeMessage,
      handleOpenModal,
      handleCloseModal,
      handleAgreeRadio,
    };
  },
};
</script>

<style scoped>
.form {
  padding: 24px 0px;
  margin: 0 auto;
  width: 100%;
  height: 559px;
  min-width: 340px;
  max-width: 541px;
}
.form-section {
  padding: 0 10px;
  border-bottom: 1px solid #67b9b4;
}
.form-section > .container {
  margin-top: 15px;
}
.table-label {
  width: 25%;
  margin: 11px 55px 20px 5px;
  padding-left: 10px;
}
td {
  text-align: left;
  border-bottom: 0;
}
.label {
  line-height: 2.3rem;
  font-family: paybooc;
  font-size: 1.15rem;
  font-weight: bold;
  color: #176a64;
}
.input-field {
  width: 75%;
}
.row {
  margin-top: 5px;
}
.col-sm-6 {
  /* padding-left: 2px; */
  text-align: left;
  line-height: 36px;
}
.form-check {
  line-height: 1rem;
}
.form-check-input {
  top: 2px;
  position: relative;
}
.form-check-label {
  font-family: ONEMobile;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.19px;
  text-align: left;
  color: #fff;
}
.table > :not(caption) > * > * {
  margin-bottom: 3px;
}
.table > :not(:first-child) {
  border-top: 0;
}
.fa-check {
  position: relative;
  top: 1px;
}
.form-control,
.form-select {
  font-family: ONEMobile;
  border-radius: 4px;
  border: solid 1px rgba(0, 101, 90, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
}
.btn {
  font-family: ONEMobile;
  border: 2px solid white;
  color: white;
}
.btn-agree {
  font-size: 1rem;
  line-height: 1.2rem;
  width: 225px;
  height: 35px;
  padding: 0;
  padding-bottom: 1px;
  border-radius: 10px;
  background-color: #63b459;
}
.btn-submit {
  font-size: 30px;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.16);
  border: solid 2px #fff;
  background-color: #3c9d8e;
}
.text-1 {
  margin: 0 5px;
  font-weight: 100;
  color: #d3d3d3;
}
.text-2 {
  margin-top: 10px;
  color: white;
  font-family: ONEMobile;
  font-size: 15px;
  line-height: 1.6;
}
.error-form-message {
  color: #2c3738;
  font-size: 1rem;
}
@media (max-width: 1199.98px) {
  .content-main {
    height: 314px;
  }
}
@media (max-width: 991.98px) {
  .content-main {
    height: 314px;
  }
}

@media (max-width: 767.98px) {
  .img-and-logo {
    left: 17px;
  }
}

@media (max-width: 575.98px) {
  .form {
    width: 100%;
  }
  .col-sm-6 {
    text-align: center;
  }
  .btn-submit {
    width: 93%;
  }
}
</style>
