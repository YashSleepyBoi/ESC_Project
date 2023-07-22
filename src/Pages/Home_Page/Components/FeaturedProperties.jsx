import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
{/* *************************************************************************** */}
      {/* HOTEL X IMAGE BUTTON */}
      <div className="fpItem">
        <button className="fpImgButton">
          <img
            src="https://i.pinimg.com/564x/39/ce/8c/39ce8c9e4643da01ed2f044951ac2cef.jpg" alt=""
            className="fpImg"
          />
        </button>
        <span className="fpName">Hotel X</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        {/* <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div> */}
      </div>
{/* *************************************************************************** */}
      {/* HOTEL Y IMAGE BUTTON */}
      <div className="fpItem">
        <button className="fpImgButton">
          <img
            src="https://i.pinimg.com/564x/7e/be/e1/7ebee115934ba6aed7ae9514288f177a.jpg" alt=""
            className="fpImg"
          />
        </button>
        <span className="fpName">Hotel Y</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        {/* <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div> */}
      </div>
{/* *************************************************************************** */}
      {/* HOTEL Z IMAGE BUTTON */}
      <div className="fpItem">
        <button className="fpImgButton">
          <img
            src="https://i.pinimg.com/564x/18/c2/d7/18c2d7ddb22694f175e900d74df8c793.jpg" alt=""
            className="fpImg"
          />
        </button>
        <span className="fpName">Hotel Z</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        {/* <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div> */}
      </div>
{/* *************************************************************************** */}
      {/* HOTEL XYZ */}
      <div className="fpItem">
        <button className="fpImgButton">
          <img
            src="https://i.pinimg.com/564x/d6/20/c6/d620c68eeea3608c518039f28dd32322.jpg" alt=""
            className="fpImg"
          />
        </button>
        <span className="fpName">Hotel XYZ</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        {/* <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProperties;
