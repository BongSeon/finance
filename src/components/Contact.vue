<template>
  <div class="contact">
    <img class="img-phone" src="../assets/img/11.png" alt="" />
    <div class="text-phone">
      <p class="text-4">
        빠르고 간편한 대출 문의 <span class="text-5">010-9999-9999</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  text-align: left;
  width: 330px;
  display: flex;
}
.img-phone {
  padding: 7px;
  border: 3px solid #176a64;
  border-radius: 50%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.text-phone {
  position: relative;
  width: 82%;
  height: 100%;
}
.text-4 {
  font-family: NEXONLv2GothicLight;
  font-size: 186%;
  font-weight: bold;
  letter-spacing: -1.3px;
  text-align: left;
  color: #176a64;
  margin: 0;
  margin-left: 8px;
  height: 50%;
}
.text-5 {
  position: absolute;
  font-family: NEXONLv2GothicLight;
  font-size: 32px;
  letter-spacing: -0.2px;
  color: #176a64;
  top: 28px;
  left: 6px;
  width: 300px;
}
</style>
