import "../styles/homesection.css";
import heroImage from "../assets/food_platter.png";
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

function HomeSection() {
  return (
    <header className="hero-section" id="home">
      {/* Background Image */}
      <div className="hero-bg">
        <img src={heroImage} alt="Food Platter" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Every Bite Tells a Story.</h1>

        <p className="hero-description">
          Crafted with passion, served with love, and made to bring people
          together over unforgettable flavors.
        </p>

        <div className="hero-buttons">
          {/* <a
            href="https://www.swiggy.com/menu/167517?source=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hero-btn">Order on Swiggy</div>
          </a>

          <a
            href="https://zomato.onelink.me/xqzv/e6x07y3t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hero-btn">Order on Zomato</div>
          </a> */}

          <a
            href="https://zeliver.in/store?slug=cafe-mug"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hero-btn">For Home Delivery</div>
          </a>
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <span className="material-symbols-outlined">expand_more</span>
      </div> */}

      {/* Info Cards */}
      <div className="hero-info-cards">
        <div className="info-card">
          <FaClock className="info-icon" />
          <div>
            <h4>Hours</h4>
            <p>Mon - Sun: 11 AM - 11 PM</p>
          </div>
        </div>

        {/* <div className="info-card">
          <MdDeliveryDining className="info-icon" />
          <div>
            <h4>Delivery</h4>
            <p>Available on Swiggy & Zomato</p>
          </div>
        </div> */}

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h4>Location</h4>
            <p>Thennampalayam, Tiruppur.</p>
          </div>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <div>
            <h4>Contact</h4>
            <p>+91 8438111014</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeSection;
