import { FaBullseye, FaEye } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-6">
        Dowell Maritime & Oil Resources Ltd is fully owned by reputable Nigerians. Dowell has capacity in upstream and downstream operation.
        for over fifteen (15) years of our existence, we grew like an oak tree to attain multi-national company status with branches from Nigeria to Hong-Kong and to United States of America.
      </p>
      <p>We have continued to hone our skills in the Downstream in Ship Agency Services, Ship Management, Oil & Gas Trading while in the Upstream, we provide Offshore industry Support Services, Sales and Leasing of Capital Goods, Special Transportation, Provision of Marine Vessels Supply and Operation, Marine Security and Escort. Mooring Services, House Boats, Tugboats and Berges, etc </p>
      <p>In addition to our Ship Agency, we manage vessels and broker charter to cargo owners. We trade in clean petroleum products, supply bulk cargoes to international Oil Companies, Independent Petroleum marketers, Oil rigs, terminals and platforms offshore. We are flexible and able to attend to calls anywhere, anytime and we have capacity to service delivery</p>
      <div className="about-grid mb-8">
        <img
          src="/assets/oil rig 1.jpg"
          alt="Maritime scene"
          className="w-full h-auto rounded shadow-md"
        />
        <img
          src="/assets/Oil Tanker with tug.jpeg"
          alt="Oil tanker with tug boat"
          className="w-full h-auto rounded shadow-md"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">Our Commitment to Service Excellence</h3>
      <div className="about-grid">
        <p>We are commited to making available to our Customers outstanding professional who render superior and distinctive service. Dowell Maritime's growth has been as a result of its ingenuity and expertise in service delivery.</p>
        <p><ul className="list-disc pl-6 mb-6">
        <li>Profssional Competence and experience in the industry spanning over 15 years.</li>
        <li>Quick response and turnaround time.</li>
        <li>Commitment to high standards of quality and excellence.</li>
        <li>Capacity for specialized services</li>
        <li>Integrity</li>
        <li>Willingness to undertake new challenging assignments enthusiastically</li>
        <li>Strong relationship over the years with Shipping /Oil & Gas /Upstream /Downstream industry operatives and Government agencies</li>
      </ul></p>
      <p>Our professional approach ensures that the righ human and capital resources are available for discharging every aspect of the project.
        We constantly train and motivate our staff to ensure that we continue to deliver on our promise of excellent service.
      </p>
        <div className="flex items-center space-x-4">
          <FaBullseye className="text-4xl text-blue-600" />
          <div>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p>To provide each client with professional, comprehensive and efficient service.</p>
            <p>To continue to be a custodian of trust for owners/operators as we manage their interests and strive to make each port call and any Oil and Gas trading transaction a complete and cost effective operational success.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaEye className="text-4xl text-green-600" />
          <div>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p>To be the foremost Shipping, Oil and Gas Company known for her high levels of efficiency and integrity with the most satisfied customers; ensuring that all stakeholders are justifiably proud to be associated with "Dowell Maritime & Oil Resources Ltd."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
