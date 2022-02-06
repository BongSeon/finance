<template>
  <div class="font-basic">
    <ContentTop />
    <div class="content-main">
      <div class="container">
        <div class="empty fs-22px">
          <br />
        </div>
        <div class="img-and-logo">
          <img class="img-logo" src="../assets/img/5.png" alt="logo" />
          <img
            class="img-building"
            src="../assets/img/23@2x.png"
            alt="건물이미지"
          />
        </div>
        <div>
          <h2 class="text-1">
            제이와이대부는
            <span class="text-2"
              >상담 신청 후 방문하시면 대면 상담도 가능합니다.</span
            >
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="content-bottom">
    <div class="container">
      <div class="py-2">
        <img class="img-map" src="../assets/img/21@2x.png" alt="지도이미지" />
      </div>
      <div class="address">
        <h2 class="text-3">
          신주소 : 경기 성남시 분당구 불정로 6 <br />
          구주소 : 경기 성남시 분당구 정자동 178-1
        </h2>
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
.content-main .container,
.content-bottom .container {
  display: flex;
  flex-direction: column;
}
.content-main .container {
  height: 323px;
  justify-content: space-between;
}
.img-logo {
  position: relative;
  top: 38px;
  left: 43px;
  z-index: 1;
}
.img-building {
  position: relative;
  height: 167px;
  top: 0px;
  left: -20px;
}
.text-1 {
  font-family: paybooc;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.49;
  color: #45b4ac;
  margin-bottom: 0.9rem;
}
.text-2 {
  color: #00655a;
}
.address {
  width: 370px;
  margin: 0 auto;
}
.text-3 {
  font-family: paybooc;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: left;
  color: #00655a;
}
.content-bottom,
.content-bottom .container {
  height: 609px;
}
.content-bottom .container {
  justify-content: center;
}
.img-map {
  height: 497px;
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .content-main .container {
    height: 196px;
  }
  .img-logo {
    height: 40px;
    left: 17px;
    top: 30px;
  }
  .img-building {
    height: 120px;
  }
  .text-1 {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
  }
  .empty {
    height: 5px;
  }
}
@media (max-width: 767.98px) {
  .text-1 {
    font-size: 1.15rem;
    margin-bottom: 0.7rem;
  }
}
@media (max-width: 575.98px) {
  .content-main .container {
    height: 176px;
  }
  .img-logo {
    height: 34px;
    left: 17px;
    top: 25px;
  }
  .img-building {
    height: 100px;
  }
  .content-bottom,
  .content-bottom .container {
    height: 409px;
  }
  .img-map {
    height: 300px;
  }
  .text-1 {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
  .address {
    width: 259px;
    margin: 0 auto;
  }
  .text-3 {
    font-size: 0.92rem;
    line-height: 1.1;
  }
}
</style>
