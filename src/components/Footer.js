import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center mt-auto">
      
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook-icon" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter-icon" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+2348033265790" target="_blank" rel="noreferrer" className="whatsapp-icon" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
        <div className="p-8 space-y-4">
            <div className="contact-container text-white">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p><FaEnvelope className="inline mr-2" /> Email: info@dowellmaritime.com.ng</p>
              <p><FaPhone className="inline mr-2" /> Phone: +234 8033265790</p>
              <p><FaMapMarkerAlt className="inline mr-2" /> Address: 67 Payne Crescent Apapa Lagos, Nigeria</p>
            </div>
        </div>
      <div className="footer-bottom">
   <p>© {new Date().getFullYear()} Dowell Maritime & Oil Resources Ltd</p>
      </div>
    </footer>
  );
}
