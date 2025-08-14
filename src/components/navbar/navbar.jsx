import "./navbar.css"; // Ensure the CSS file is correctly linked
import logo from "../assests/images/logo.png"; // Adjust the path as necessary
import cart from "../assests/images/cart.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if needed
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS if needed

const Navbar = () => {
  return (
    <>
      <div id="navbar_Menu">
        <div id="navbar_logo">
          <img src={logo} alt="logo" />
          <p>StyleSphere</p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              {/* Navbar */}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="navbar_cart">
          <img src={cart} alt="cart logo" />
          <button>login</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
