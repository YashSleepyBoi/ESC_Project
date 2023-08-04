import './profile.css'
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <div>
        <div className='bgImage'></div>
        <div className='profileContainer'>
            <div className='sectionContainer'>
                <div className='profileTitle'>Personal Particulars</div>
                {/* Route to /editprofile page */}
                <Link to='/editprofile'>
                    <button className='editButton'>Edit Particulars</button>
                </Link>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Name</div>
                {/* Input Name from database */}
                <div className='userInfoText'><b>Alex</b></div>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Email</div>
                {/* Input email from database */}
                <div className='userInfoText'><b>alex@email.com</b></div>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Password</div>
                {/* Input password from database */}
                <div className='userInfoText'><b>Password123</b></div>
            </div>
{/* *************************************************************************** */}
            <div className='profileTitle'>Booking History</div>
                <div className='bookingContainer'>
                    No History
                    {/* Input booking history from database */}
                </div>
{/* *************************************************************************** */}
        </div>
    </div>
  )
}

export default Profile;
