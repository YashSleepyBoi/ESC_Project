// import Navbar from '../Home_Page/Components/navbar/Navbar'
import './profile.css'

const Profile = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='background-image'></div>
        <div className='profileContainer'>
            <div className='profileTitle'>Edit Profile</div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Name</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='Alex Berry'/>
                </div>
                <button className='editButton'>Edit</button>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>email</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='alexberry@mail.com'/>
                </div>
                <button className='editButton'>Edit</button>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Password</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='**********'/>
                </div>
                <button className='editButton'>Edit</button>
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Credit Card</div>
                <div className='userInputContainer'>
                    <input type='text' placeholder='Visa xxxx xxxx xxxx 2983'/>
                </div>
                <button className='editButton'>Edit</button>
            </div>
{/* *************************************************************************** */}
        </div>
    </div>
  )
}

export default Profile;
