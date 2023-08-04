import {db} from "../../../firebase";
import { getAuth, reauthenticateWithCredential, updateEmail,updatePassword, EmailAuthProvider } from "firebase/auth";

import { doc, updateDoc } from "firebase/firestore";

export default function updateProfile(name,email,oldPassword, password,confirmPassword){
    return new Promise(async (resolve, reject) => {
        async function changeUserName(name) {
            const auth = getAuth();
            const userCredential = auth.currentUser;
            const userUID = userCredential.uid;
            const currentDateTime = new Date();
        
            await updateDoc(doc(db, "Users", userUID), {
            name: name,
            updated_date: currentDateTime
            });
        }


        async function changeEmail(email){
            const auth = getAuth();
            // When the page is loaded
            const userCredential = auth.currentUser;
            const userUID = userCredential.uid;
            const currentDateTime = new Date();
            console.log(email);

            

            try {
                const credential = EmailAuthProvider.credential(userCredential.email, oldPassword);
                await reauthenticateWithCredential(userCredential,credential);
                await updateEmail(userCredential, email);
                // Update the email in the firestore
                await updateDoc(doc(db, "Users", userUID), {
                email: email,
                updated_date: currentDateTime
                });
                console.log("Updated email to:" + email);
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert("Email was not changed!!!");
            }
        }

        async function changePassword(oldPassword,password,confirmPassword){
            const auth = getAuth();
            // When the page is loaded
            
            const userCredential = auth.currentUser;
            const userUID = userCredential.uid;
            const currentDateTime = new Date();

            if (password == confirmPassword){
                try {
                    const credential = EmailAuthProvider.credential(userCredential.email, oldPassword);
                    await reauthenticateWithCredential(userCredential,credential);
                    await updatePassword(userCredential, password);
                    await updateDoc(doc(db, "Users", userUID), {
                    updated_date: currentDateTime
                    });
                    console.log("Updated password!!!");
                } catch (error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert("Password was not changed!");
                }

            }
            else{
                alert("Passwords don't match!!!")
            }
        }



    // Change the user account based on the parameters given
    if (password != "" && confirmPassword != ""){
        console.log("starting change pwd");
        changePassword(oldPassword, password,confirmPassword);
    }
    if (email != ""){
        console.log("starting email change")
        changeEmail(email);
    }
    if (name != ""){
        console.log("starting name change")
        changeUserName(name);
    }

    resolve();
});
}