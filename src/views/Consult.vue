<template>
  <div class="home font-basic">
    <ContentTop />
    <div class="content-main">
      <div class="container">
        <div class="section-1">
          <div class="img-and-logo">
            <img class="img-avatar" src="../assets/img/20.png" alt="" /><img
              class="img-logo"
              src="../assets/img/5.png"
              alt="logo"
            />
          </div>

          <p class="text-1">
            온라인 365일! 24시간!
            <span class="text-2">빠른상담신청</span>
          </p>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="section-2">
        <ApplyForm />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ApplyForm from "../components/ApplyForm.vue";
import ContentTop from "@/components/ContentTop.vue";

export default {
  components: { ContentTop, PageTitle, ApplyForm },
};
</script>

<style scoped>
body {
  background-color: #99d1ce;
}
.section-1 {
  height: 316px;
  padding-top: 36px;
}
.img-and-logo {
  position: relative;
  margin: 0px auto;
  margin-bottom: 0;
  width: 221px;
  top: 0px;
  left: 0px;
}
.img-avatar {
  width: 221px;
}
.img-logo {
  position: absolute;
  width: 120px;
  top: 100px;
  left: -43px;
}
.text-1 {
  margin-top: 10px;
  font-family: paybooc;
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: -1.3px;
  color: #45b4ac;
}
.text-2 {
  position: relative;
  color: #176a64;
}
.phone {
  margin: 58px auto;
  background-color: blanchedalmond;
  width: 520px;
  height: 87px;
}
.text-3 {
  display: inline;
  vertical-align: middle;
  font-family: S-CoreDream-5Medium;
  font-size: 59px;
  font-weight: 500;
  line-height: 0.69;
  letter-spacing: -2.95px;
  color: #00655a;
  margin-left: 8px;
}
.content-bottom {
  height: 490px;
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
  .btn-agree {
    margin: 0 45px;
  }
}
@media (max-width: 575.98px) {
  .content-main,
  .section-1 {
    height: 295px;
  }
  .content-bottom {
    height: 600px;
  }
  .btn-agree {
    margin: 0 45px;
  }
  .img-avatar {
    width: 192px;
  }
  .text-1 {
    font-size: 1.25rem;
  }
}
</style>
