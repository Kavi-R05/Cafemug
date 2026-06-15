// import { Link } from "react-router-dom";
// import "../styles/navbar.css";
// import logo from "../assets/CAFE TAMILNAME PNG.png";
// import logoicon from "../assets/CAFE MUG - WHITE - PNG.png";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           <img src={logoicon} alt="CafeMug logo" />
//           <img src={logo} alt="CafeMug Logo" />
//         </Link>

//         <ul className="nav-links">
//           <li>
//             <a href="#home">Home</a>
//           </li>

//           <li>
//             <a href="#dishes">Dishes</a>
//           </li>

//           <li>
//             <a href="#about">About</a>
//           </li>

//           <li>
//             <a href="#reviews">Customer Reviews</a>
//           </li>

//           <li>
//             <a href="#location">Location</a>
//           </li>
//         </ul>

//         <button className="order-btn">Order Now</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import "../styles/navbar.css";
// import logo from "../assets/CAFE TAMILNAME PNG.png";
import logoicon from "../assets/CAFE MUG - WHITE - PNG.png";
import LogoName from "../assets/cafemug logo.jpeg";

import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          {/* <img src={logoicon} alt="Cafe Mug Logo" className="logo-icon" /> */}
          <img src={LogoName} alt="Cafe Mug" className="logo-text" />
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#dishes" onClick={() => setMenuOpen(false)}>
              Dishes
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About us
            </a>
          </li>

          <li>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>
          </li>

          <li>
            <a href="#location" onClick={() => setMenuOpen(false)}>
              Location
            </a>
          </li>
        </ul>

        {/* <button className="order-btn">Order on App</button> */}
        <div className="order-button">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9_yQL16f533D2x5B8f_kv6eiZ5rJPvJsJUo-ozQE61DCfaA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hero-btn">Franchise</div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
