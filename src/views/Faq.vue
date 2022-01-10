<template>
	<!-- begin #page-title -->
	<div id="page-title" class="page-title has-bg">
		<div class="bg-cover" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-xs="0.2" style="background: url(../assets/img/cover/cover-8.jpg) center 0px / cover no-repeat"></div>
		<div class="container">
			<h1>상품안내</h1>
			<p>Blog Concept Front End Page</p>
		</div>
	</div>
	<!-- end #page-title -->
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