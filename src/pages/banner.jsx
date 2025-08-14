import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import men from "../components/assests/images/men.png";
import women from "../components/assests/images/women.png";
import kids from "../components/assests/images/kids.png";
import female from "../components/assests/images/female.jpg"
import children from "../components/assests/images/children.jpg"
import cloths from "../components/assests/images/cloths.jpg"

import "./banner .css"; // Ensure the CSS file is correctly linked


const Banner = () => {
  return (
    <>
    <div id="banner">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={female} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={cloths} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={children} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
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
