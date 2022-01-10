<template>
  <div>
    <h1>Consult</h1>
    <button @click="handleSubmit">상담신청</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import postConsult from '../composables/postConsult'

export default {
  components: { },

  setup() {
    const { error, post } = postConsult()

    const handleSubmit = async () => {
      console.log('상담신청이 접수되었습니다.')
      post('태준빈님의 상담신청이 도착하였습니다. 이 메시지는 뷰에서 보낸 것입니다.')
    }
    
    return { handleSubmit }
  }
}
</script>
