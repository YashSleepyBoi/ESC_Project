import HotelIcon from "@mui/icons-material/Hotel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// Format for input: name of the link to be displayed
// route for the link which you will be using to redirect to your page
// icon for the icon to be displayed in the drawer(only in mobile view)
const links = [
    { name: "Find & Reserve", route: "/findreserve", icon: EventAvailableIcon },
    { name : "Hotels", route: "/hotels", icon: HotelIcon},
];



  export {
    links
  };