<template>
  <div class="home font-basic">
    <ContentTop />
    <div class="bg-basic">
      <div class="container">
        <h3 class="text-1">
          낮은 금리로 빠르고 쉽고 간편하게~
          <img
            class="img-hand"
            src="../assets/img/hand-touch.png"
            alt="손 이미지"
          />
        </h3>
        <h2 class="text-2">
          ‘제이와이대부’에서
          <span class="text-3">대출하자</span>
        </h2>
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTop from "@/components/ContentTop.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: { ContentTop, Contact },
};
</script>

<style scoped>
.text-1 {
  position: relative;
  background: white;
  padding: 9px 47px 6px 47px;
  border-radius: 23px;
  /* line-height: 37px; */
  width: 550px;
  /* height: 46px; */
  font-family: Paybooc;
  font-size: 1.9rem;
  font-weight: 500;
  text-align: center;
  color: #0b6b72;
  top: 155px;
  left: 12px;
}
.text-2 {
  width: 626px;
  height: 308px;
  margin: 16px 18px 0 0;
  font-family: NEXONLv2GothicOTF;
  font-size: 4.4rem;
  /* font-size: 80px; */
  /* font-weight: bold; */
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: left;
  color: #18939d;
  position: relative;
  top: 159px;
  /* left: 12px; */
  padding-left: 12px;
}
.text-3 {
  font-size: 9.7rem;
  /* font-size: 179px; */
  color: #fff;
  display: inline-block;
}
.img-hand {
  position: absolute;
  width: 100%;
  top: -64px;
  left: 647px;
}
.contact {
  position: relative;
  top: 154px;
  left: 126px;
}
@media (max-width: 1199.98px) {
  .img-hand {
    width: 84%;
    top: -64px;
    left: 514px;
  }
  .text-2 {
    top: 169px;
  }
}
@media (max-width: 991.98px) {
  .img-hand {
    display: none;
  }
  .text-1 {
    position: relative;
    width: 80%;
    /* margin: 0 auto; */
    padding: 0;
    border-radius: 17px;
    min-height: 34px;
    line-height: 34px;
    font-size: 1.2rem;
    top: 81px;
    left: 0;
    display: inline-block;
    /* vertical-align: middle; */
  }
  .text-2 {
    /* position: relative; */
    width: 90%;
    height: 308px;
    margin: 0 auto;
    padding: 0;
    font-size: 3.1rem;
    /* font-size: 80px; */
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: normal;
    text-align: center;
    /* text-align: left; */
    color: #18939d;
    position: relative;
    top: 93px;
    left: 0;
    /* left: 12px; */
  }
  .text-3 {
    font-size: 7rem;
    /* font-size: 179px; */
    color: #fff;
    display: inline-block;
  }
  .contact {
    /* position: absolute; */
    margin: 0 auto;
    top: 10px;
    left: 0;
    transform: scale(0.8);
  }
}

@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .text-1 {
    font-size: 1.05rem;
    /* padding: 1% 1%; */
  }
  .text-2 {
    font-size: 2.1rem;
  }
  .text-3 {
    font-size: 4.7rem;
  }
  .contact {
    /* position: absolute; */
    margin: 0 auto;
    top: -70px;
    left: 0;
    transform: scale(0.6);
  }
}
</style>
