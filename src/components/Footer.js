import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center mt-auto">
      
      <div className="flex justify-center gap-6 mt-3 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+2348033265790" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-bottom">
   <p>© {new Date().getFullYear()} Dowell Maritime & Oil Resources Ltd</p>
      </div>
    </footer>
  );
}
