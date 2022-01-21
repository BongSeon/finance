<template>
  <div class="font-basic">
    <ContentTop />
    <div class="content-main">
      <div class="container">
        <div class="img-and-logo">
          <img class="img-logo" src="../assets/img/5.png" alt="logo" />
          <img
            class="img-gide"
            src="../assets/img/gide.png"
            alt="대출절차 이미지"
          />
        </div>
        <Contact />
      </div>
    </div>
    <div class="content-bottom">
      <div class="container">
        <div class="row my-4">
          <h2 class="text-1 mb-0">
            상담만으로는 신용조회 기록이 절대 남지 않습니다.
          </h2>
        </div>
        <div class="row ms-3">
          <div class="flow flow-1 col-3">
            인터넷 접수 및<br />
            전화상담
          </div>
          <div class="arrow-r col-1">=></div>
          <div class="flow flow-2 col-3">담당자 상담</div>
          <div class="arrow-r col-1">=></div>
          <div class="flow flow-3 col-3">대출심사</div>
        </div>
        <div class="row ms-3">
          <div class="col-8"></div>
          <div class="arrow-r col-3">=></div>
        </div>
        <div class="row ms-3">
          <div class="flow flow-4 col-3">대출금 수령</div>
          <div class="arrow-l col-1">=></div>
          <div class="flow flow-5 col-3">회사내방<br />또는 출장</div>
          <div class="arrow-l col-1">=></div>
          <div class="flow flow-6 col-3">대출승인</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTop from "@/components/ContentTop.vue";
export default {
  components: { ContentTop },
};
</script>

<style scoped>
.content-main,
.flow,
.arrow-l,
.arrow-r,
.content-bottom .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-logo {
  position: relative;
  /* width: 120px; */
  top: 0px;
  left: 25px;
}
.content-bottom {
  height: 547px;
}
.content-bottom .container {
  max-width: 960px;
}

.text-1 {
  font-family: paybooc;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  /* letter-spacing: 0rem; */
  text-align: center;
  color: #00655a;
}
.flow {
  height: 147px;
  /* margin: 31px 9.9px 16.5px 588px; */
  padding: 0 20px;
  border-radius: 26px;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.16);
  border: solid 3px #fff;
  font-family: ONEMobile;
  font-size: 1.9rem;
  color: white;
}
.arrow-l,
.arrow-r {
  min-height: 60px;
  background: #919191;
}
.flow-1 {
  background: #63b459;
}
.flow-2 {
  background: #4ca042;
}
.flow-3 {
  background: #3d9033;
}
.flow-4 {
  background: #33897c;
}
.flow-5 {
  background: #389a8b;
}
.flow-6 {
  background: #47b4a3;
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
}
</style>
