<template>
  <div>
    <h1>FAQ</h1>
    <h5 v-for="faq in faqs" :key="faq.id">{{ faq.title }}</h5>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getFaqs from '../composables/getFaqs'

export default {
  components: {  },

  setup() {
    const { faqs, error, load } = getFaqs()
    load()
    
    return { faqs }
  }
}
</script>