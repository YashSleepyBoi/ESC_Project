import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
{/* *************************************************************************** */}
        {/* RESORTS */}
        <img
          src="https://i.pinimg.com/564x/16/df/18/16df18f062e882dcc4371f59d529d22e.jpg" alt=""
          className="featuredImg"
        />
        {/* RESERVE NOW BUTTON */}
        <div className="middle"><button className="buttontext">Reserve Now</button></div>
        {/* TITLE */}
        <div className="featuredTitles"><h2>Resorts</h2></div>
      </div>    
{/* *************************************************************************** */}
      {/* HOTELS */}
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/564x/bf/00/af/bf00af9fe4883781814c26d7c4b7f814.jpg" alt=""
          className="featuredImg"
        />
        {/* RESERVE NOW BUTTON */}
        <div className="middle"><button className="buttontext">Reserve Now</button></div>
        {/* TITLE */}
        <div className="featuredTitles"><h2>Hotels</h2></div>
      </div>
{/* *************************************************************************** */}
      {/* VILLAS */}
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/564x/7c/7a/4a/7c7a4a3b478baf5e0ac05057b411d573.jpg" alt=""
          className="featuredImg"
        />
        {/* RESERVE NOW BUTTON */}
        <div className="middle"><button className="buttontext">Reserve Now</button></div>
        {/* TITLE */}
        <div className="featuredTitles"><h2>Villas</h2></div>
      </div>
    </div>
  );
};

export default Featured;
