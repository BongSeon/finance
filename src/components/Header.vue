<template>
  <!-- begin #header -->
  <div
    id="header"
    class="header navbar navbar-default navbar-expand-lg navbar-fixed-top header-font"
  >
    <HeaderTop />
    <!-- begin container -->
    <div class="container">
      <!-- begin navbar-brand -->
      <brand class="navbar-brand">
        <router-link to="/">
          <span class="brand-logo"
            ><img src="../assets/img/7.png" alt="logo" /><span
              class="brand-desc"
            >
              신속하고 정확한 더 빠른 대출업체
            </span></span
          >
          <span class="brand-text">
            제이와이<span class="text-color-1">대부</span>
          </span>
        </router-link>
      </brand>
      <!-- end navbar-brand -->
      <!-- begin navbar-toggle -->
      <button
        type="button"
        class="navbar-toggle collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#header-navbar"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- end navbar-toggle -->
      <!-- begin navbar-collapse -->
      <div class="collapse navbar-collapse" id="header-navbar">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/gide">소개</router-link></li>
          <li><router-link to="/product">상품안내</router-link></li>
          <li><router-link to="/consult">상담문의</router-link></li>
          <li><router-link to="/tous">오시는길</router-link></li>
        </ul>
      </div>
      <!-- end navbar-collapse -->
    </div>
    <!-- end container -->
  </div>
  <!-- end #header -->
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";

export default {
  components: {
    HeaderTop,
  },
};
</script>

<style>
.pace-active {
  display: none;
}
.header {
  /* position: sticky !important; */
  padding: 22px 0;
  -webkit-transition: none;
}
.header.navbar-fixed-top {
  top: 25px;
}
.header.navbar-sm {
  /* 스크롤 아래로 했을 때 */
  padding: 22px 0;
}
.header-font {
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.header .navbar-brand {
  padding: 10px 15px;
  max-height: 51px;
}
.header .navbar-brand .brand-logo {
  position: relative;
  border: 0;
  background: none;
  /* background: url("../assets/img/7.png"); */
  /* background-color: burlywood; */
  border-radius: 0;
  width: 70px;
  height: 34px;
  top: 9px;
}
.header .navbar-brand img {
  display: block;
  margin: 0 0;
  height: 34px;
}
.header .navbar-brand .brand-text {
  /* width: 182px;
  height: 39px; */
  position: relative;
  padding-top: 10px;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1.75px;
  /* text-align: left; */
  color: #20958b;
  top: 09px;
  left: -6px;
}
.header .navbar-brand .brand-desc {
  position: absolute;
  top: -32px;
  left: 2px;
  border: 0;
  width: 248px;
  height: 21px;
  font-size: 19px;
  letter-spacing: -0.76px;
  /* text-align: left; */
  color: #064d47;
}
.header .nav.navbar-nav > li > a {
  color: #064d47;
  font-size: 1.31rem;
  font-family: AppleSDGothicNeo;
}
.header .nav.navbar-nav > li > a:hover {
  color: #064d47;
  text-decoration: dotted underline 0.17rem;
  text-underline-position: under;
}
.text-color-1 {
  color: #064d47;
}

@media (min-width: 1200px) {
  .header.navbar-fixed-top {
    top: 35px;
  }
}
@media (max-width: 767.98px) {
  .header {
    padding: 7px 0;
  }
  .header.navbar-fixed-top {
    top: 0px;
  }
  .header .navbar-brand .brand-logo {
    margin: 0 0;
    width: 39px;
    height: 19px;
    top: 6px;
  }
  .header .navbar-brand img {
    display: block;
    margin: 0 0;
    height: 19px;
  }
  .header .navbar-brand .brand-text {
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: -0.95px;
    left: 0;
    top: -1px;
    margin: 4px;
  }
  .header .navbar-brand .brand-desc {
    display: none;
  }
}
</style>
