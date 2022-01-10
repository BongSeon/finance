import { ref } from 'vue'
import axios from 'axios'

const getFaqs = () => {
  const faqs = ref([])
  const error = ref(null)

  const load = async () => {
    await axios.get('/faqs').then(res => {
      console.log(res.data)
      faqs.value = res.data
    }).catch((error) => {
      console.log(error)
      error.value = err.message
      throw Error('NO faqs AVAILABLE')
    })
  }

  return { faqs, error, load }
}

export default getFaqs