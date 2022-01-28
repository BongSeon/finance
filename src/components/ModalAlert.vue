<template>
  <!-- #modal-alert -->
  <div class="modal fade" :class="{ show: this.showModal }" id="modal-alert">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">데이터 삭제</h4>
          <button
            type="button"
            class="btn-close"
            aria-modal="true"
            @click="handleCloseButton"
          ></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger">
            <h5><i class="fa fa-info-circle"></i> 데이터 삭제</h5>
            <p>
              <span class="fw-bold">{{ this.payload.name }}</span
              >님의 해당 내역을 삭제하시겠습니까?<br />이 작업은 취소할 수
              없습니다.
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-white" @click="handleCloseButton">취소</button>
          <button
            class="btn btn-danger"
            @click="handleActionButton(this.payload)"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal", "payload"],
  setup(props, context) {
    const handleCloseButton = () => {
      context.emit("close");
    };
    const handleActionButton = (payload) => {
      console.log("action:", payload.id);
      context.emit("action", 10);
    };
    return { handleCloseButton, handleActionButton };
  },
};
</script>

<style scoped>
.show {
  display: block;
  background: rgb(0 0 0 / 50%);
}
.modal-title {
  /* border-radius: 6px 6px 0 0; */
  font-family: ONEMobile;
  /* font-size: 30px; */
  /* font-weight: bold; */
  text-align: left;
}
.modal-dialog {
  /* min-width: 375px; */
  margin: 150px auto;
}
.modal-body {
  padding: 0.7rem;
}
.alert {
  margin-bottom: 0;
}
@media (max-width: 575.98px) {
  .modal-dialog {
    margin: 150px 0.5rem;
  }
}
</style>
