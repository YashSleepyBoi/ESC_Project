import React, { useState } from "react";
import "./Stylesheets/Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

function Register(){
//declare hooks
const [nameID, setName] = useState("");
const [email,setEmail] = useState(""); // use state to set the email as an empty field
const [password,setPassword] = useState(""); // use state to set the email as an empty field
const [confirmPass,setConfirmPass] = useState(""); // use state to set the email as an empty field
const [errorMsg, setErrorMsg] = useState("");
const navigate = useNavigate();

const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(email);
    if(password.length <6){
        // When the password is not long enough
        setErrorMsg("Password must be at least 6 letters!")
    }
    else if (confirmPass == password
        && password.length >= 6){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const currentDateTime = new Date();
            
            const customDocumentId = user.uid; 
            //Add to the database
            await setDoc(doc(db, "Users", customDocumentId), {
                name: nameID,
                email: email,
                bookings: [],
                created_date: currentDateTime,
                updated_date: currentDateTime
              }).then(()=>{
                console.log("Successfully created:" + user);
                signOut(auth).then(() => {
                    // Sign-out successful.
                    console.log("Successfully logged out of account")
                }).catch((error) => {
                    // An error happened.
                    console.log(error);
                })
              })
            // Navigate back to the homepage
            navigate("/login");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // set the error message as the errormsg            
            setErrorMsg(errorCode.replace("-"," ").replace("auth/",''));
            // ..
        });
    }else{
        console.log("Passwords don't match")
        setErrorMsg("Passwords don't match!")
    }
}


// ======================================================================================

    return(
        <div className="Wrapper">   
            
            <div className="bgImage"></div>
            <form className="RegForm" onSubmit={handleSubmit}>

{/* ************************************************************** */}
{/* Enter the Name */}

                <label htmlFor="Name">Name:</label>
                    <input
                    value={nameID}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    placeholder="John Po"
                    id="name"
                    name="name"
                    />

{/* ************************************************************** */}
{/* Enter the email */}

                <label htmlFor="email">Email:</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                    />

{/* ************************************************************** */}
{/* Enter the Password */}

                <label htmlFor="password">Password:</label>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="*********"
                    id="password"
                    name="password"
                    />

{/* ************************************************************** */}
{/* Enter the Confirm Password */}

                 <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                    placeholder="*********"
                    id="confirmPassword"
                    name="confirmPassword"
                    />

{/* ************************************************************** */}

                {/* ErrorMSG */}
                <label>{errorMsg}</label>

{/* ************************************************************** */}

                {/* Submit Button */}
                <button className="RegisterBtn" type="submit" onClick={onsubmit}>Register</button>
            
                {/* route to login page */}
                <label className="changePageTxt" htmlFor="changePage">Already have an account?
                {/* TODO 3: FIX THE ROUTER */}
                    <Link to="/login">
                        <button className="transitionLogin"> Sign in! </button>
                    </Link>
                </label>

{/* ************************************************************** */}

            </form>

        </div>
    );

}

export default Register;