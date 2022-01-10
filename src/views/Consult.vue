<template>
	<!-- begin #page-title -->
	<div id="page-title" class="page-title has-bg">
		<div class="bg-cover" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-xs="0.2" style="background: url(../assets/img/cover/cover-8.jpg) center 0px / cover no-repeat"></div>
		<div class="container">
			<h1>상담문의</h1>
			<p>Blog Concept Front End Page</p>
		</div>
	</div>
	<!-- end #page-title -->
  <div>
    <h1>Consult</h1>
    <button @click="handleSubmit">상담신청</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import postConsult from '../composables/postConsult'
import sendTelegram from '../composables/sendTelegram'

export default {
  components: { },

  setup() {
    const { error1, post } = postConsult()
    const { error2, send } = sendTelegram()

    const handleSubmit = async () => {
      console.log('상담신청이 접수되었습니다.')
      let postData = 
      {
        user_name: "노홍철",
        user_phone: "01012349999",
        type: "대출문의",
        datetime: Date.now()
      }
      post(postData)

      //send(postData.user_name + '님의 상담신청이 접수되었습니다.')
    }
    
    return { handleSubmit }
  }
}
</script>
