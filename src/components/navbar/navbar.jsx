import './navbar.css'; // Ensure the CSS file is correctly linked
import logo from '../assests/images/logo.png'; // Adjust the path as necessary
import cart from '../assests/images/cart.png';



 const Navbar = () => {
  return (
    <>
        <div id="navbar_Menu">
            <div id="navbar_logo">
                <img src={logo} alt="logo"/>
                <p>StyleSphere </p>
            </div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Men</li>
                    <li>Women</li>
                </ul>
           
            <div id="navbar_cart">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart Icon" /> */}
                {/* <span id="cart_count">0</span> */}
                <img src={cart} alt="cart logo"/>
                <button>login</button>
            </div>
         </div>
    </>
  )
}
export default Navbar;
