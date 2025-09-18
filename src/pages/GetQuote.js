import { useState } from "react";
import "./GetQuote.css";


export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Later you will call Django API here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="get-quote-container">
          <h2>Get a Quote</h2>
          <form onSubmit={handleSubmit} className="get-quote-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="shipping">Shipping</option>
              <option value="logistics">Logistics</option>
              <option value="cargo">Cargo Handling</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
