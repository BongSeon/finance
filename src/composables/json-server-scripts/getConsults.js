import { ref } from "vue";
import axios from "axios";

const getConsults = () => {
  const consults = ref([]);
  const error = ref(null);

  const load = async (page) => {
    await axios
      .get(
        "/api/consults?_page=" + page + "&_limit=5&_sort=datetime&_order=desc"
      )
      .then((res) => {
        console.log(res.data);
        consults.value = res.data;
      })
      .catch((error) => {
        console.log(error);
        error.value = err.message;
        throw Error("NO consults AVAILABLE");
      });
  };

  return { consults, error, load };
};

export default getConsults;
