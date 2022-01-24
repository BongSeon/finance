<template>
  <!-- BEGIN footer -->
  <footer class="footer">
    <div class="footer-top"></div>
    <div class="container">
      <div class="row">
        <div class="footer-logo col-12 col-sm-4 col-md-2 mb-4 mb-lg-0">
          <div class="brand-logo">
            <img src="../assets/img/26.png" alt="logo" />
          </div>
          <!-- <div>
              <img src="../assets/img/invalidName.png" alt="logo" />
            </div> -->
          <div class="brand-text">
            제이와이<span class="text-color-1">대부</span>
          </div>
        </div>
        <div
          class="footer-main text-start col-12 col-sm-8 col-md-7 mb-4 mb-lg-0"
        >
          <p>
            JY제이와이대부 | 대표이사 대대부 | 사업자등록번호 : 000–00-000000
          </p>
          <p>주소 : 서울특별시 강남구 도곡동 419번지 청송빌딩 3층 302호</p>
          <p>대표전화 : 02-000-0000</p>
          <p></p>
          <p class="copyright mt-2">
            COPYRIGHT ⓒ 2022 JY제이와이대부. ALL RIGHTS RESERVED
          </p>
        </div>
        <div class="footer-contact col-12 col-md-3 mb-4 mb-lg-0 text-end">
          <contact>
            <img class="img-phone" src="../assets/img/11.png" alt="" />
            <span class="text-1">전화상담</span>
          </contact>
          <div class="text-2">02-000-0000</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="footer-desc col-12 text-start text-lg-start mb-3 mb-lg-0">
            <p>
              ※ 중개수수료를 요구하거나 받는건 것은 불법이며 과도한 빚, 고통의
              시작입니다.
            </p>
            <p>
              ※ 대부이율(연 이자율) 및 연체이자율은 연 20%를 를 초과할 수
              없습니다.(이자율 년 20%이내. 취급수수료무. 담보대출시출장비,
              설정비 본인부담)
            </p>
            <p>
              ※ 대출시 귀하의 신용등급이 하락 할 수 있으며, 2개월 이후는
              조기상환수수료 없음, 2개월 이내는 대출금액의 3%의 조기상환조건이
              이 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- END footer -->
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: white;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.footer-top {
  width: 100%;
  background-color: #186a64;
  height: 25px;
}
/* .footer .container .row {
  background: #c9c9c9;
} */
.footer-logo,
.footer-main,
.footer-contact {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer-logo {
  height: 130px;
  /* background: yellowgreen; */
}
.footer-logo .brand-logo {
  height: 40px;
}
.footer-logo .brand-logo img {
  height: 40px;
}
.footer-logo .brand-text {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.1rem;
  top: 11px;
  left: -6px;
}
.footer-main p {
  margin: 0;
  font-family: paybooc;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  color: #5c5c5c;
}
.footer-main .copyright {
  font-family: paybooc;
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  color: #5c5c5c;
}
.footer-contact .img-phone {
  padding: 3px;
  height: 22px;
  line-height: 34px;
}
.footer-contact .text-1 {
  font-family: paybooc;
  font-size: 0.9rem;
  line-height: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02rem;
  color: rgba(0, 0, 0, 0.7);
}
.footer-contact .text-2 {
  font-family: EliceDigitalBaeumOTF;
  font-size: 1.7rem;
  line-height: 1;
  letter-spacing: -0.1rem;
  color: #176a64;
}
.footer-bottom {
  min-height: 155px;
  background: #f5f5f5;
}
.footer-desc p {
  margin: 0;
  font-family: paybooc;
  font-size: 0.65rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  color: #5c5c5c;
}
@media (max-width: 1199.98px) {
  .footer-top {
    height: 20px;
  }
}
@media (max-width: 991.98px) {
  .footer-top {
    height: 15px;
  }
  .footer-contact .text-2 {
    font-size: 1.5rem;
    letter-spacing: -0.1rem;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .footer-logo {
    height: 100px;
  }
  .footer-logo .brand-logo img {
    height: 30px;
  }
}
</style>
