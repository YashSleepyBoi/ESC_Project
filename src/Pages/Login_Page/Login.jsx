import React, { useState } from "react";
import "./Stylesheets/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from '../../firebase';
import { Link } from "react-router-dom";




function Login(){
//declare hooks
const [email,setEmail] = useState(""); // use state to set the email as an empty field
const [password,setPassword] = useState(""); // use state to set the email as an empty field
const [errorMsg, setErrorMsg] = useState("");


    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(email);

        await signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)

            if (errorCode == "auth/user-not-found"){
                setErrorMsg("Invalid Credentials");
            }
        });   
    }

    return(
        <div className="Wrapper">
            <div className="bgImage"></div>
            <form className="LoginForm" onSubmit={handleSubmit}>
                
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
 
                {/* ErrorMSG */}
                <label>{errorMsg}</label>

                {/* Submit Button */}
                <button className="LoginBtn" type="Login" onClick={onsubmit}>Login</button>
            
                {/* route to Register page */}
                <label className="changePageTxt" htmlFor="changePage">No account yet?
                    <Link to="/register">
                        <button className="transitionReg"> Create account </button>
                    </Link>
                </label>

            </form>

        </div>
    );

}

export default Login;