import { ref } from 'vue'
import axios from 'axios'

const postConsult = () => {
  const error = ref(null)

  const post = async (message) => {
    console.log('post호출, massage: ', message)
    // let postData = 
    // {
    //   user_name: "김도균",
    //   user_phone: "01012349999",
    //   type: "대출문의",
    //   datetime: "202200109126000"
    // }
    let chatData = {
      chat_id: 1041023086, //1250785916,1041023086,
      text: message
    }
    await axios.post(
      'https://api.telegram.org/bot5045004073:AAGaNiuup9tlqG06bBtQi_CT4KmNReupT30/sendMessage',
      chatData
    ).then(res => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
      throw Error('챗 전송 실패')
    })
    

    // await axios.post(
    //   '/consults',
    //   postData
    // ).then(res => {
    //   console.log(res.data)
    // }).catch((err) => {
    //   console.log(err)
    //   error.value = err.message
    //   throw Error('NO post AVAILABLE')
    // })
  }

  return { error, post }
}

export default postConsult