import React, { useState } from "react";
import "./Stylesheets/Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";




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
    if (confirmPass == password){
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            //Add to the database
            const docRef = addDoc(collection(db, "Users"), {
                name: nameID,
                email: email,
                bookings: null,
            })


            console.log(user);
            navigate("/");
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
    }
    else{
        console.log("Passwords don't match")
        setErrorMsg("Passwords don't match!")
    }
}



    return(
        <div className="Wrapper">   
            
            <div className="bgImage"></div>
            <form className="RegForm" onSubmit={handleSubmit}>

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
                {/* ErrorMSG */}
                <label>{errorMsg}</label>

                {/* Submit Button */}
                <button className="RegisterBtn" type="submit" onClick={onsubmit}>Register</button>
            
                {/* route to login page */}
                <label className="changePageTxt" htmlFor="changePage">Already have an account?
                {/* TODO 3: FIX THE ROUTER */}
                    <Link to="/login">
                        <button className="transitionLogin"> Sign in here </button>
                    </Link>
                </label>

            </form>

        </div>
    );

}

export default Register;