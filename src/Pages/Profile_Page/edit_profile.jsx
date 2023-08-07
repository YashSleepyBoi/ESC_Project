import './profile.css'
import {Link} from "react-router-dom";
import { useState } from 'react';
import updateProfile from './components/updateProfile';
import { useNavigate } from "react-router-dom";
import {deleteUser} from './components/deleteProfile';


const EditProfile = ({setBottom}) => {
    const [nameID, setName] = useState("");
    const [email,setEmail] = useState(""); // use state to set the email as an empty field
    const [oldPassword,setOldPassword] = useState(""); // use state to set the email as an empty field
    const [password,setPassword] = useState(""); // use state to set the email as an empty field
    const [confirmPass,setConfirmPass] = useState(""); // use state to set the email as an empty field
    const [errorMsg, setErrorMsg] = useState("");
    const [stay, setStay] = useState(false);
    const navigate = useNavigate();
    setBottom(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        // Allow the user to stay
        if (stay){
            return false;
        }

        if (oldPassword == ""){
            setErrorMsg("please enter old password!!!")
            return false;
        }
        if(password.length < 6 && password.length>0){
            // When the password is not long enough
            setErrorMsg("Password must be at least 6 letters!")
        }
        else if (password == confirmPass){
            await updateProfile(nameID,email,oldPassword,password,confirmPass)
            .then(() => {
                console.log("Change complete")
                navigate("/profile");
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            console.log("Passwords don't match")
            setErrorMsg("Passwords don't match!")
        }


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='bgImage'></div>
        <div className='editprofileContainer'>
            <div className='sectionContainer'>
                <div className='profileTitle'>Edit Personal Details</div>
                {/* Route to /editprofile page */}

            </div>
{/* *************************************************************************** */}
{/* NAME */}
            <div className='sectionContainer'>
                <div className='profileText'>New Name</div>
                <div className='userInputContainer'>
                    <input type='text' 
                    placeholder='Alex Berry'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
{/* EMAIL */}
            <div className='sectionContainer'>
                <div className='profileText'>New Email</div>
                <div className='userInputContainer'>
                    <input type='text' 
                    placeholder='alexberry@mail.com'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>

{/* *************************************************************************** */}
{/* OLD PASSWORD  */}
<div className='sectionContainer'>
                <div className='profileText'>Old Password</div>
                <div className='userInputContainer'>
                    <input type='password' 
                    placeholder='**********'
                    onChange={(e) => setOldPassword(e.target.value)}/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
{/* NEW PASSWORD */}
            <div className='sectionContainer'>
                <div className='profileText'>New Password</div>
                <div className='userInputContainer'>
                    <input type='password' 
                    placeholder='**********'
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
{/* CONFIRM PASSWORD */}
                <div className='profileText'>Confirm New Password</div>
                <div className='userInputContainer'>
                    <input type='password' 
                    placeholder='**********'
                    onChange={(e) => setConfirmPass(e.target.value)}/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
{/* Error Message */}
            <div className='sectionContainer'>
                {/* ErrorMSG */}
                <label>{errorMsg}</label>
            </div>

{/* *************************************************************************** */}
            <div className='sectionContainer'>
{/* SAVE BUTTON */}
                <button className='editButton' onClick={onsubmit}>Save</button>
{/* CANCEL BUTTON */}
                <button className='editButton' onClick={()=> navigate("/profile")}>Cancel</button>
{/* DELETE ACCOUNT BUTTON */}
                <button className='editButton' onClick={async () => {
                     if (window.confirm('Are you sure you wish to delete this item?')){ 

                        // Call the deleteUser Function
                        await deleteUser(oldPassword);
                        navigate("/");
                     }
                     else{
                        // Stay on page
                        return setStay(true);
                     }
                     }}>
                        Delete Account</button>
                
                
            </div>

        </div>
        </form>
        
        
    </div>
  )
}

export default EditProfile;