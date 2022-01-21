<template>
  <!-- BEGIN modal -->
  <div
    class="modal fade"
    :class="{ show: showModal }"
    aria-modal="true"
    id="modalDetail"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header px-4">
          <div class="fs-24px fw-bolder">개인정보 제공 동의서</div>
          <button
            @click="handleCloseButton"
            class="btn-close"
            data-bs-dismiss="modal"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body p-0">
          <div class="row gx-0">
            <div class="text text-1 mt-3 col-md-12 p-4 fs-14px line-h-16">
              본 대출상담신청과 관련하여 ㈜페퍼저축은행이 본인의 개인정보를
              제공하고자 하는 경우에는 『개인정보 보호법』 제17조, 제22조 및
              제24조 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』
              제24조의2에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야
              하는 정보입니다. 이에 본인은 귀사가 본인의 개인정보를 아래와 같이
              제3자에게 제공하는 것에 동의합니다.
            </div>
            <div class="text text-2 mt-1 col-md-12 p-3 fs-14px line-h-16">
              [개인정보의 필수적인 제공에 관한 사항]
            </div>
          </div>
          <div class="row gx-0">
            <div class="col-md-12 p-4 fs-14px line-h-16">
              <p class="text-3 mb-2">1. 개인정보를 제공받는자</p>
              <p class="text-2 mb-4 ms-4">
                영업담당자 및 귀사와 위탁계약을 체결한 대출상담사
              </p>
              <p class="text-3 mb-2">
                2. 개인정보를 제공받는 자의 개인정보 이용 목적
              </p>
              <p class="text-2 mb-4 ms-4">
                귀사가 취급하는 금융상품의 상담 목적
              </p>
              <p class="text-3 mb-2">3. 제공하는 개인정보의 항목</p>
              <p class="text-2 mb-4 ms-4">성명, 전화번호(휴대폰 번호)</p>
              <p class="text-3 mb-2">4. 개인정보의 보유 및 이용 기간</p>
              <p class="text-2 mb-4 ms-4">제공 동의일로부터 3개월</p>
              <p class="text-3 mb-0">
                5. 개인정보 수집.이용 동의를 거부할 권리가 있으나, 이에 대한
                동의가 없을 경우 대출상담 신청 등이 불가능할 수 있음을 알려
                드립니다.
              </p>
              <hr class="mt-4 mb-1" />
            </div>
          </div>
        </div>
        <!-- <div class="modal-header px-4 border-0">
          <div class="fs-24px fw-bolder">개인정보 수집 · 이용 제공 동의서</div>
        </div>
        <div class="modal-body p-0">
          <div class="row gx-0">
            <div class="text text-1 mt-3 col-md-12 p-4 fs-14px line-h-16">
              본 대출상담신청과 관련하여 제이와이대부가 본인의 개인정보를
              수집.이용하고자 하는 경우에는 『개인정보 보호법』 제15조 및
              제22조, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』
              제22조에 따라 동의를 얻어야 합니다. 이에 본인은 귀사가 아래와 같이
              본인의 개인정보를 수집.이용하는 것에 동의합니다.
            </div>
            <div class="text text-2 mt-1 col-md-12 p-3 fs-14px line-h-16">
              [개인정보의 필수적인 수집.이용에 관한 사항]
            </div>
          </div>
          <div class="row gx-0">
            <div class="col-md-12 p-4 fs-14px line-h-16">
              <p class="text-3 mb-2">1. 개인정보 수집.이용 목적</p>
              <p class="text-2 mb-4 ms-4">
                영업담당자 및 귀사와 위탁계약을 체결한 대출상담사
              </p>
              <p class="text-3 mb-2">2. 수집하는 개인정보 항목</p>
              <p class="text-2 mb-4 ms-4">
                영업담당자 및 귀사와 위탁계약을 체결한 대출상담사
              </p>
              <p class="text-3 mb-2">3. 개인정보의 보유 및 이용 기간</p>
              <p class="text-2 mb-4 ms-4">
                영업담당자 및 귀사와 위탁계약을 체결한 대출상담사
              </p>
              <p class="text-3 mb-2">
                4. 개인정보 수집.이용 동의를 거부할 권리가 있으나, 이에 대한
                동의가 없을 경우 대출상담 신청 등이 불가능할 수 있음을 알려
                드립니다.
              </p>
              <hr class="my-4" />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- END modal -->
</template>

<script>
export default {
  props: ["showModal"],
  setup(props, context) {
    const handleCloseButton = () => {
      // showModal = false;
      context.emit("close");
    };
    return { handleCloseButton };
  },
};
</script>

<style scoped>
.show {
  display: block;
  background: rgb(0 0 0 / 50%);
}
.modal-header {
  background-color: #3c9d8e;
  border-radius: 6px 6px 0 0;
  font-family: ONEMobile;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}
.border-0 {
  border-radius: 0;
}
.modal-content {
  text-align: left;
}
.btn-close {
  width: 0.5rem;
  height: 0.5rem;
  color: white;
  background: none;
  /* opacity: 0.7; */
}
.fa-times {
  transform: translate(-37%, -38%);
}
.row .text {
  font-family: ONEMobile;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
}
.text-1 {
  color: #939393;
  background-color: #e8e8e8;
}
.text-2 {
  color: #939393;
}
.text-3 {
  font-family: ONEMobile;
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: normal;
  text-align: left;
  color: #117671;
}
.text-4 {
  color: #939393;
}

.modal-dialog {
  margin: 3rem auto;
}
@media (max-width: 991.98px) {
  .text-3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 767.98px) {
  .text-3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 575.98px) {
  .text-3 {
    font-size: 1.15rem;
  }
  .modal-dialog {
    margin: 0.5rem;
  }
}
</style>
