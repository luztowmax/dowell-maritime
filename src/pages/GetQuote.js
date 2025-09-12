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
      {/* Main Content */}
      <main className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Get a Quote
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            className="w-full border p-2 rounded"
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
            className="w-full border p-2 rounded"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="bg-blue-900 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </main>

    

    </div>
  );
}
