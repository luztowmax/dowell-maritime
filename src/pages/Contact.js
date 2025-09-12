import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen p-8 space-y-4 justify-center items-center bg-blue-500">
      <div className="contact-container text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p><FaEnvelope className="inline mr-2" /> Email: info@dowellmaritime.com.ng</p>
        <p><FaPhone className="inline mr-2" /> Phone: +234 8033265790</p>
        <p><FaMapMarkerAlt className="inline mr-2" /> Address: 67 Payne Crescent Apapa Lagos, Nigeria</p>
      </div>
    </div>
  );
}
