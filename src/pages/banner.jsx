import men from "../components/assests/images/men.png";
import women from "../components/assests/images/women.png";
import kids from "../components/assests/images/kids.png";
import banner from "../components/assests/videos/banner.mp4"; // Adjust the path as necessary

import "./banner.css"; // Ensure the CSS file is correctly linked
const Banner = () => {
  return (
    <>
    <div id="banner">
        <video  autoPlay muted loop id="banner_video" width={"100%"}>
           <source src={banner} />
              Your browser does not support the video tag.
        </video>
    </div>
      <div id="category">
        <div id="men">
          <img src={men} alt="" />
          <p>Men</p>
        </div>
        <div id="women">
          <img src={women} alt="" />
          <p>Women</p>
        </div>
        <div id="kids">
          <img src={kids} alt="" />
          <p>Kids</p>
        </div>
      </div>
    </>
  );
};
export default Banner;
