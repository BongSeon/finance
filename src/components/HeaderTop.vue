<template>
  <div class="header-top navbar-fixed-top"></div>
</template>

<script>
export default {};
</script>

<style>
.header-top {
  position: fixed;
  width: 100%;
  background-color: #186a64;
  height: 25px;
  top: 0;
  z-index: -99999000;
}
@media (max-width: 767.98px) {
  .header-top {
    height: 0px;
    z-index: 0;
  }
}
@media (min-width: 1200px) {
  .header-top {
    height: 35px;
    z-index: -99999000;
  }
}
</style>
