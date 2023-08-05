import './profile.css'
import {Link} from "react-router-dom";
import { useState } from 'react';
import updateProfile from './components/updateProfile';

import { useNavigate } from "react-router-dom";


const EditProfile = ({setBottom}) => {
    const [nameID, setName] = useState("");
    const [email,setEmail] = useState(""); // use state to set the email as an empty field
    const [oldPassword,setOldPassword] = useState(""); // use state to set the email as an empty field
    const [password,setPassword] = useState(""); // use state to set the email as an empty field
    const [confirmPass,setConfirmPass] = useState(""); // use state to set the email as an empty field
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    setBottom(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await updateProfile(nameID,email,oldPassword,password,confirmPass)
        .then(() => {
            console.log("Change complete")
            navigate("/profile");
        })
        .catch((error)=>{
            console.log(error)
        })


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
                <div className='profileText'>Name</div>
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
                <div className='profileText'>Email</div>
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
            <div className='sectionContainer'>
{/* SAVE BUTTON */}
                <button className='editButton' onClick={onsubmit}>Save</button>
{/* CANCEL BUTTON */}
                <button className='editButton' onClick={onsubmit}>Cancel</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default EditProfile;