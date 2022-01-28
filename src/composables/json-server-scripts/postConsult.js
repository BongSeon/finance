import { ref } from 'vue'
import axios from 'axios'

const postConsult = () => {
  const error = ref(null)

  const post = async (postData) => {
    await axios.post(
      '/consults',
      postData
    ).then(res => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
      error.value = err.message
      throw Error('NO post AVAILABLE')
    })
  }

  return { error, post }
}

export default postConsult