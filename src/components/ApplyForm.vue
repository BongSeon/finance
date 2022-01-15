<template>
  <div class="form">
    <div class="form-section">
      <table class="table">
        <tr>
          <td class="table-label label">+ 이름</td>
          <td class="input-field">
            <input
              class="form-control"
              type="text"
              placeholder=""
              name="user_name"
              v-model="postData.user_name"
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
              v-model="postData.user_phone"
            />
          </td>
        </tr>
        <tr>
          <td class="table-label label">+ 분류</td>
          <td class="input-field">
            <select
              class="form-select"
              name="loan_type"
              v-model="postData.loan_type"
            >
              <option value="주택담보대출" selected>주택 담보 대출</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <div class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <span class="label">+ 개인정보 수집 이용 동의</span>
          </div>
          <div class="col-sm-6">
            <div class="form-check form-check-inline ms-5px">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">동의함</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2"
                >동의안함</label
              >
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <button class="btn btn-agree">
              <i class="fas fa-check"></i> <span class="text-1">|</span>
              동의서 확인하기
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <div class="text-2">
      ※개인정보 수집 이용 및 제공에 동의하셔야 서비스 이용이 가능합니다.
    </div>
    <div>
      <!-- <button class="btn btn-submit w-150px ms-5px" @click="handleSubmit"> -->
      <button class="btn btn-submit ms-5px" @click="handleSubmit">
        빠른상담신청
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import postConsult from "../composables/postConsult";
import sendTelegram from "../composables/sendTelegram";

export default {
  setup() {
    const { error1, post } = postConsult();
    const { error2, send } = sendTelegram();
    const postData = ref({
      user_name: "이름",
      user_phone: "전화번호",
      loan_type: "주택담보대출",
      datetime: null,
    });

    const handleSubmit = async () => {
      console.log("상담신청이 접수되었습니다.");
      // postData.value.user_name = "김수달";
      postData.value.user_phone = "01012349999";
      postData.value.loan_type = "주택담보대출";
      postData.value.datetime = Date.now();

      console.log(postData.value);
      post(postData.value);

      send(postData.value.user_name + "님의 상담신청이 접수되었습니다.");
    };

    return { handleSubmit, postData };
  },
};
</script>

<style scoped>
.form {
  /* margin-top: 58px; */
  padding: 24px 0px;
  margin: 0 auto;
  /* background-color: blanchedalmond; */
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
  text-align: left;
  color: #176a64;
}
.input-field {
  width: 75%;
}
.row {
  margin-top: 5px;
}
.col-sm-6 {
  padding-left: 2px;
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
  /* padding: 0.3rem 0.3rem; */
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
  padding: 0 0 1px 0;
  border-radius: 10px;
  /* box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.16); */
  background-color: #63b459;
}
.btn-submit {
  /* height: 34px; */
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
@media (max-width: 1199.98px) {
  .bg-basic {
    height: 314px;
  }
}
@media (max-width: 991.98px) {
  .bg-basic {
    height: 314px;
  }
}

@media (max-width: 767.98px) {
  .bg-basic {
    /* height: 261px; */
  }
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
    width: 95%;
  }
}
</style>
