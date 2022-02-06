import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const getConsults = () => {
  const error = ref(null);
  const consults = ref(null);

  const load = async () => {
    try {
      const collectionRef = collection(db, "consults");
      const q = query(collectionRef, orderBy("datetime", "desc"), limit(300));
      const results = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        results.push({ ...doc.data(), id: doc.id });
      });
      consults.value = results;
    } catch (err) {
      console.error("Error adding document: ", err);
      error.value = err;
    }
  };

  return { consults, error, load };
};

export default getConsults;
