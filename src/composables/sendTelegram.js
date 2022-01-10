import { ref } from 'vue'
import axios from 'axios'

const sendTelegram = () => {
  const error = ref(null)

  const send = async (message) => {
    let chatData = {
      chat_id: 1250785916, //1250785916, 1041023086,
      text: message
    }
    await axios.post(
      'https://api.telegram.org/bot5049519840:AAEeXGGnbOSKWrgTrYHyiH_N86nB_rkEGP0/sendMessage',
      chatData
    ).then(res => {
      console.log(res.data)
      console.log('텔레그램 메시지 발송 완료 , massage: ', message)
    }).catch((err) => {
      console.log(err)
      throw Error('챗 전송 실패')
    })
  }

  return { error, send }
}

export default sendTelegram