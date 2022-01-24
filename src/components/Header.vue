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
          <li><router-link to="/admin">어드민</router-link></li>
          <li><router-link to="/gide">대출절차</router-link></li>
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
  position: relative;
  padding-top: 10px;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.3rem;
  color: #20958b;
  top: 8px;
  left: -8px;
}
.header .navbar-brand .brand-desc {
  position: absolute;
  border: 0;
  width: 248px;
  height: 21px;
  font-size: 1.13rem;
  letter-spacing: -0.1rem;
  color: #064d47;
  top: -29px;
  left: 7px;
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
    letter-spacing: -0.12rem;
    left: 0;
    top: -1px;
    margin: 4px;
  }
  .header .navbar-brand .brand-desc {
    display: none;
  }
}
</style>
