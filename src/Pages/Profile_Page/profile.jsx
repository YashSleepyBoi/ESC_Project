import './profile.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import getProfile from './components/getProfile';
import useAuth from './useAuth'; // Import the custom hook
import { getAuth, signOut } from "firebase/auth";


const Profile = ({setBottom}) => {
    const user = useAuth();
    // use states for updating the information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookings, setBookings] = useState([]);
    const auth = getAuth();
    setBottom(false);

    // On page load, get the user information
    useEffect(() => {
        const fetchProfileData = async () => {
        if (user) {
            try {
            const userUID = user.uid;
            const profileData = await getProfile(userUID);
            console.log("Profiledata: ", profileData);
            if (profileData) {
                setName(profileData[0]);
                setEmail(profileData[1]);
                setBookings(profileData[2]);
            }
            } catch (error) {
            console.log('Error obtaining info: ', error);
            }
        }
        };

        if (user) {
        fetchProfileData();
        }
    }, [user]);

    if (!user) {
        // If the user is not logged in, show a loading screen or redirect to login page
        return <div>Loading...</div>;
    }

    // ===============================================================================
    // HTML portion
    return (
        <div>
            <div className='bgImage'></div>
            <div className='profileContainer'>
    {/* *************************************************************************** */}
    {/* EDIT DETAILS BUTTON */}
                <div className='sectionContainer'>
                    <div className='profileTitle'>Personal Details</div>
                    {/* Route to /editprofile page */}
                    <Link to='/editprofile'>
                        <button className='editButton'>Edit Details</button>
                    </Link>
                </div>
    {/* *************************************************************************** */}
    {/* NAME */}
                <div className='sectionContainer'>
                    <div className='profileText' id="name">Name</div>
                    {/* Input Name from database */}
                    <div className='userInfoText'><b>{name}</b></div>
                </div>
    {/* *************************************************************************** */}
    {/* EMAIL */}
                <div className='sectionContainer'>
                    <div className='profileText' id="email">Email</div>
                    {/* Input email from database */}
                    <div className='userInfoText'><b>{email}</b></div>
                </div>
    {/* *************************************************************************** */}
    {/* PASSWORD */}
    
                 {/*  REMOVED PASSWORD COMPONENT */}

    {/* *************************************************************************** */}
    {/* BOOKING HISTORY */}
                <div className='profileTitle'>Booking History</div>
                    <div className='bookingContainer' id="bookings">
                    {bookings.length === 0 ? "No History" : bookings.map((booking, index) => (
                        <div key={index}>{booking}</div>
                    ))}
                    </div>
    {/* *************************************************************************** */}
    {/* SIGNOUT BUTTON */}
                <Link to ="/">
                    <button onClick={ () =>{
                            //TODO Properly handle signout
                            signOut(auth).then(() => {
                                // Sign-out successful.
                            }).catch((error) => {
                                // An error happened.
                            })}}><button className='editButton'>Signout</button>
                    </button>
                </Link>
            </div>
        </div>
    )
    }

export default Profile;
