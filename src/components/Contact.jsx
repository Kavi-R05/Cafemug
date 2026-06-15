import "../styles/contact.css";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">CafeMug</h2>
          <p>
            Fresh ingredients, handcrafted flavors, and unforgettable dining
            experiences served every day.
          </p>
          <br />
          <p>Gst: 33GCEPS0991C1ZM </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#dishes">Dishes</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>

          <p className="contact-item">
            <FaMapMarkerAlt size={18} color="#EA4335" />
            <span className="contact-item-info">Thennapalayam, Tiruppur.</span>
          </p>

          <p className="contact-item">
            <FaPhoneAlt size={16} color="#34A853" />
            <a className="contact-item-info" href="tel:+918438111014">
              +91 8438111014
            </a>
          </p>

          <p className="contact-item">
            <MdEmail size={20} color="#4285F4" />
            <a
              className="contact-item-info"
              href="mailto:cafemugrooftop@gmail.com"
            >
              cafemugrooftop@gmail.com
            </a>
          </p>
        </div>

        {/* <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/cafemug_tirupur?igsh=a2dvdnI2Mmk0b3dx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@cafemug_tirupur?si=UJC_VJz-OoJqekAj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://wa.me/8438111014"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div> */}

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a
              href="https://www.instagram.com/cafemug_tirupur?igsh=a2dvdnI2Mmk0b3dx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} color="#E4405F" />
              <span>Instagram</span>
            </a>

            <a
              href="https://youtube.com/@cafemug_tirupur?si=UJC_VJz-OoJqekAj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={22} color="#FF0000" />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.facebook.com/share/1b9z1eJpDV/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={22} color="#1877F2" />
              <span>Facebook</span>
            </a>

            <a
              href="https://wa.me/8438111014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} color="#25D366" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CafeMug. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
