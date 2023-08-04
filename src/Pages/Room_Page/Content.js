const accomodationDesc = `Step into an exclusive world of sophistication and privilege when you check into one of the luxury rooms or suites at an Ascenda Loyalty hotel. Enjoy panoramic views of cityscapes, mountains, or serene oceans from the comfort of our 'floating' beds that redefine the standards of luxury.`;
const roomHeader = "Luxurious Rooms";
const coverImage =
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80";
const roomDesc =
  "Begin your journey with our Luxurious Room, an intimate and elegantly designed space perfect for leisure or business travellers. Every Deluxe Room boasts premium bedding, a well-stocked minibar, and a state-of-the-art entertainment system. The ensuite marble bathroom, equipped with a spacious shower and high-end amenities, offers a spa-like retreat right in your room.";
const suitDesc1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt sapiente unde magnam vero repudiandae commodi, temporibus accusamus, facere placeat ipsum id odio.";
const footerData = ['Overview', 'Gallery', 'Accommodations', 'Dining', 'Experiences', 'Meetings & Weddings', 'Tracking Preferences', 'Your Privacy Rights', '30 BEACH ROAD, ACCESS VIA NICOLL HIGHWAY, SINGAPORE, 189763', 'TOLL FREE:+65-68181881'];
// exporting all the data
const actionButtonStyle = { width:"100%", bgcolor: '#e4beb6', textTransform: 'capitalize', borderRadius: '1rem', color: 'black', fontSize: 'small', '&:hover': { filter: 'brightness(1.1)', bgcolor: '#e4beb6' } }
const iconButtonStyle = { bgcolor: "#dbd8cf", width: '2rem', marginLeft: 'auto', marginBottom: '1.5rem', borderRadius: '4px', '&:hover': { filter: 'brightness(1.05)', bgcolor: '#dbd8cf' } }
const footerButtonStyle = { color: 'black', textDecoration: 'underline', '&:hover': { fontWeight: 'bold', textDecoration: 'underline' } }
const reserveButtonStyle = { width:"100%", bgcolor: '#fa7502', color: 'black', borderRadius: '1rem', fontWeight: 'bold', '&:hover': { filter: 'brightness(1.15)', bgcolor: '#fa7502' } }
const drawerButtonStyle = {
  width: "70%",
  borderRadius: '1rem',
  backgroundColor: "#fa7502",
  color: "#000",
  fontWeight: "bold",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: '#fa7502',
    filter: 'brightness(1.1)'
  }
};
const loadMoreButtonStyle = { bgcolor:"#353b49", color:"white", marginTop: '2.5rem', borderRadius:"1rem", fontWeight:"bold", '&:hover': { filter: 'brightness(1.1)', bgcolor: 'black' } }
export {
  accomodationDesc,
  roomHeader,
  coverImage,
  roomDesc,
  suitDesc1,
  footerData,
  actionButtonStyle,
  iconButtonStyle,
  footerButtonStyle,
  reserveButtonStyle,
  drawerButtonStyle,
  loadMoreButtonStyle
};