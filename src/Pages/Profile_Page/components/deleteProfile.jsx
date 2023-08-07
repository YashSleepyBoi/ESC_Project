import { db } from "../../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export async function deleteUser(password) {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (!user) {
    throw new Error('No user is currently signed in.');
  }

  try {
    // Reauthenticate the user
    console.log("Authenticating user")
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user,credential);

    console.log("starting document delete");
    // Delete the associated document
    const docRef = doc(db,"Users", user.uid);
    await deleteDoc(docRef).then(
        console.log("successfully deleted user.uid from Users collection")
    )
    //Delete the account
    await user.delete();
    console.log("User Account Deleted Successfully");
  } catch (error) {
    console.log("Unable to delete user: " + error);
    throw error;
  }
}
