<template>
  <div class="toast-wrap position-fixed">
    <div
      class="toast"
      :class="{ show: showToast }"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <img
          src="../assets/img/icon-chat-bubble.png"
          class="rounded me-2"
          width="20px"
          alt="..."
        />
        <strong class="me-auto">상담신청완료</strong>
        <!-- <small>11 mins ago</small> -->
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body p-1">
        상담신청이 접수되었습니다. <br />빠른 시간 내로 답변드리겠습니다.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showToast"],
};
</script>

<style scoped>
.toast-wrap {
  z-index: 10000;
  padding: 20px;
  right: 0;
  bottom: 0;
}
.toast {
  width: 380px;
  height: 100px;
}
.toast-header {
  font-family: paybooc;
  font-size: 16px;
}
.toast-body {
  font-family: ONEMobile;
  font-size: 16px;
  line-height: 22px;
  color: #454545;
}
@media (max-width: 575.98px) {
  .toast-wrap {
    width: 100%;
    padding: 0 20px 20px;
    right: 0;
  }
  .toast {
    width: 100%;
    /* padding: 20px; */
    /* right: 0; */
  }
}
</style>
