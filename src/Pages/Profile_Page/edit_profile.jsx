import './profile.css'
import {Link} from "react-router-dom";

const EditProfile = () => {
  return (
    <div>
        <div className='bgImage'></div>
        <div className='profileContainer'>
            <div className='sectionContainer'>
                <div className='profileTitle'>Edit Personal Particulars</div>
                {/* Route to /editprofile page */}
                <Link to='/profile'>
                    <button className='editButton'>Save</button>
                </Link>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Name</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='Alex Berry'/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Email</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='alexberry@mail.com'/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Password</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='**********'/>
                </div>
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}

{/* *************************************************************************** */}
        </div>
    </div>
  )
}

export default EditProfile;