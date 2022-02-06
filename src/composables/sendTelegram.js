import { ref } from "vue";
import axios from "axios";

const sendTelegram = () => {
  const sendError = ref(null);

  const send = async (message) => {
    // const botId = "bot5049519840:AAEeXGGnbOSKWrgTrYHyiH_N86nB_rkEGP0";
    const botId = "bot5045004073:AAGaNiuup9tlqG06bBtQi_CT4KmNReupT30";
    const chatData = {
      // chat_id: 1250785916, //1250785916, 1041023086,
      chat_id: 1041023086, //1250785916, 1041023086,
      text: message,
    };
    await axios
      .post("https://api.telegram.org/" + botId + "/sendMessage", chatData)
      .then((res) => {
        console.log(res.data);
        console.log("텔레그램 메시지 발송 완료, 메시지본문: ", message);
        sendError.value = null;
      })
      .catch((err) => {
        // console.log(err);
        console.log("에러났습니다");
        sendError.value = err;
        throw Error("챗 전송 실패");
      });
  };

  return { sendError, send };
};

export default sendTelegram;
