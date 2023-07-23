import "./home.css";
import Featured from "./Components/Featured";
import FeaturedProperties from "./Components/FeaturedProperties";
// import Header from "./Components/header/Header";
// import Navbar from "./Components/navbar/Navbar";
import MailList from "../Home_Page/Components/MailList";

// import HeaderEdit from "./Components/header/HeaderEdit";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Header/> */}
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <Featured/>
        <h1 className="homeTitle">Hotels guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;


