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
</style>
