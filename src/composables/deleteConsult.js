import { ref } from "vue";
import axios from "axios";

const deleteConsult = () => {
  const error = ref("");

  const del = async (id) => {
    await axios
      .delete("/api/consult/delete/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        error.value = err.message;
        throw Error("NO post AVAILABLE");
      });
  };

  return { error, del };
};

export default deleteConsult;
