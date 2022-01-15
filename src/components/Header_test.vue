<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/consult">Consult</router-link> |
    <router-link to="/faq">Faq</router-link>
  </div> -->
  <!-- begin #header -->
  <div
    id="header"
    class="header navbar navbar-default navbar-expand-lg navbar-fixed-top header-font"
  >
    <!-- begin container -->
    <div class="container">
      <div class="header-top"></div>
      <!-- begin navbar-brand -->
      <a href="index.html" class="navbar-brand">
        <span class="brand-logo">
          <span class="brand-desc">
            신속하고 정확한 더 빠른 대출업체
          </span></span
        >
        <span class="brand-text"
          >제이와이<span class="text-color-1">대부</span>
        </span>
      </a>
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
          <li><router-link to="/">소개</router-link></li>
          <li><router-link to="/Faq">상품안내</router-link></li>
          <li><router-link to="/consult">상담문의</router-link></li>
          <li><router-link to="/">오시는길</router-link></li>
        </ul>
      </div>
      <!-- end navbar-collapse -->
    </div>
    <!-- end container -->
  </div>
  <!-- end #header -->
</template>

<script>
export default {};
</script>

<style>
.header-top {
  position: absolute;
  width: 100%;
  background-color: #186a64;
  height: 35px;
  top: 0;
}
.header.navbar-default {
  height: 151px;
  padding: 0;
  padding-top: 35px;
}
.container {
  padding: 0;
  background: #e3e3e3;
}
.header .navbar-brand .brand-logo {
  position: relative;
  border: 0;
  background: url("../assets/img/7.png");
  border-radius: 0;
  width: 70px;
  height: 34px;
  top: 10px;
}
.header .navbar-brand .brand-desc {
  position: absolute;
  top: -25px;
  left: 8px;
  border: 0;
  width: 248px;
  height: 21px;
  font-size: 19px;
  letter-spacing: -0.76px;
  text-align: left;
  color: #064d47;
}
.header .navbar-brand .brand-text {
  /* width: 182px;
  height: 39px; */
  position: relative;
  padding-top: 10px;
  font-size: 35px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.75px;
  text-align: left;
  color: #20958b;
  top: 6px;
  left: -6px;
}
.header .nav.navbar-nav > li > a {
  padding: 15px;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #064d47;
  text-decoration: none;
}
.text-color-1 {
  color: #064d47;
}
.header-font {
  font-family: NanumSquare;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.logo {
  width: 70px;
  height: 34px;
  background-image: url("../assets/img/7@3x.png") !important;
}
</style>
