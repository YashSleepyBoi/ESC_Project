import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProfile(userUID) {
  // Returns the name, email and bookings as an array
  try {
    console.log(userUID);
    const docRef = doc(db, "Users", userUID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    console.log(data);
    const name = data.name;
    const email = data.email;
    const bookings = data.bookings;
    console.log("sending info back");
    return [name, email, bookings];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching user profile.");
  }
}



