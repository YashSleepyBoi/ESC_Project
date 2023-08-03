import './profile.css'

const EditProfile = () => {
  return (
    <div>
        <div className='background-image'></div>
        <div className='profileContainer'>
            <div className='profileTitle'>Edit Profile</div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Name</div>
                {/* <div className='userInputContainer'>
                    <input type='text' placeholder='Alex Berry'/>
                </div> */}
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Email</div>
                {/* <div className='userInputContainer'>
                    <input type='text' placeholder='alexberry@mail.com'/>
                </div> */}
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}
            <div className='sectionContainer'>
                <div className='profileText'>Password</div>
                {/* <div className='userInputContainer'>
                    <input type='text' placeholder='**********'/>
                </div> */}
                {/* <button className='editButton'>Edit</button> */}
            </div>
{/* *************************************************************************** */}

{/* *************************************************************************** */}
        </div>
    </div>
  )
}

export default EditProfile;