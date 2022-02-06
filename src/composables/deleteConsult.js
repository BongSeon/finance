import { ref } from "vue";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const deleteConsult = () => {
  const error = ref(null);

  const del = async (collectionName, id) => {
    console.log("del ->", id);
    await deleteDoc(doc(db, collectionName, id));
  };

  return { error, del };
};

export default deleteConsult;
