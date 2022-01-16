<template>
  <!-- BEGIN modal -->
  <div
    class="modal fade"
    :class="{ show: showModal }"
    aria-modal="true"
    id="modalDetail"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header px-4">
          <div class="fs-24px fw-bolder">개인정보 제공 동의서</div>
          <button
            @click="handleCloseButton"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body p-0">
          <div class="row gx-0">
            <div class="text text-1 mt-3 col-md-12 p-4 fs-14px line-h-16">
              본 대출상담신청과 관련하여 ㈜페퍼저축은행이 본인의 개인정보를
              제공하고자 하는 경우에는 『개인정보 보호법』 제17조, 제22조 및
              제24조 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』
              제24조의2에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야
              하는 정보입니다. 이에 본인은 귀사가 본인의 개인정보를 아래와 같이
              제3자에게 제공하는 것에 동의합니다.
            </div>
            <div class="text text-2 mt-1 col-md-12 p-3 fs-14px line-h-16">
              [개인정보의 필수적인 제공에 관한 사항]
            </div>
          </div>
          <div class="row gx-0">
            <div class="col-md-12 p-4 fs-14px line-h-16">
              <p class="mb-0">
                The Marketing team is responsible for conceptualizing and
                implementing go-to-market activities to achieve increased usage
                and visibility. The team covers areas including Campaigns
                Management, Community, Public Relations, Partnerships, Offline
                Marketing and Design. The Regional Marketing team is responsible
                for strategizing and implementing go-to-market activities and
                working with local teams to localize marketing for the specific
                markets. The Brand and Growth Marketing team covers all aspects
                of online and performance marketing for the region. This team is
                responsible for data-driven solutions, tracking and measuring
                data to reach the targeted customers.
              </p>
              <hr class="my-4" />
              <div class="h5 mb-3">Job Description:</div>
              <ul>
                <li>
                  Oversee the livestream online operations team in managing
                  back-end related matters for live shows (e.g. streamer
                  management, vouchers, banners, etc.)
                </li>
                <li>
                  Supervise back-end admin during official live shows to ensure
                  smooth flow
                </li>
                <li>
                  Plan and manage the workflow of the team to ensure all
                  submissions and tasks are done in a timely manner
                </li>
                <li>
                  Provide support to the commercial team in administrative
                  duties i.e. vendor registration and payment, inventory
                  tracking, fulfillment of livestream products post-show
                </li>
                <li>
                  Craft and implement improvement plan to improvise day-to-day
                  operational processes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END modal -->
</template>

<script>
export default {
  props: ["showModal"],
  setup(props, context) {
    const handleCloseButton = () => {
      // showModal = false;
      context.emit("close");
    };
    return { handleCloseButton };
  },
};
</script>

<style scoped>
.show {
  display: block;
  background: rgb(0 0 0 / 50%);
}
.modal-header {
  background-color: #3c9d8e;
  border-radius: 6px 6px 0 0;
  font-family: ONEMobile;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}
.row .text {
  font-family: ONEMobile;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
}
.text-1 {
  color: #939393;
  background-color: #e8e8e8;
}
.text-2 {
  color: #939393;
}
.modal-body {
}
.title-1 {
}
</style>
