import { FaBullseye, FaEye } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Dowell Maritime & Oil Resources Ltd is fully owned by reputable Nigerians. Dowell has capacity in upstream and downstream operation.
        for over twenty two (22) ocean years of our existence, we grew like an oak tree to attain multi-national company status with branches from Nigeria to Hong-Kong and to United States of America.
      </p>
      <p>We have continued to hone our skills in the Downstream in Ship Chattering Services, Ship Management, Ship Husbandry, Oil & Gas Trading while in the Upstream, Offshore industry Support Services, Sales and Leasing of Capital Goods, Special Transportation, Provision of Marine Vessels Supply and Operation, Marine Security and Escort. Mooring Services, House Boats, Tugboats and Berges, etc </p>
      <p>In addition to our downstream services, we manage vessels and broker charter to cargo owners with VLCC Tankers, Afromat vessels, MR vessels, small sized vessels for DPP and CPP cargoes. We trade in clean petroleum products, supply bulk cargoes to international Oil Companies, Independent Petroleum marketers, Oil rigs, terminals and platforms offshore. We are flexible and able to attend to calls anywhere, anytime and we have capacity for service delivery.</p>
      <div className="about-grid">
        <img
          src="/assets/oil rig 1.jpg"
          alt="Maritime scene"
        />
        <img
          src="/assets/Oil Tanker with tug.jpeg"
          alt="Oil tanker with tug boat"
        />
      </div>
      <h3>Our Commitment to Service Excellence</h3>
      <div className="about-commitment">
        <p>We are committed to making available to our customers outstanding professionals who render superior and distinctive services. Dowell Maritime's growth has been as a result of its ingenuity and expertise in service delivery.</p>
        <ul>
          <li>Professional Competence and experience in the industry spanning over 22 years.</li>
          <li>Quick response and turnaround time.</li>
          <li>Commitment to high standards of quality and excellence.</li>
          <li>Capacity for specialized services</li>
          <li>Integrity</li>
          <li>Willingness to undertake new challenging assignments enthusiastically</li>
          <li>Strong relationship over the years with Shipping /Oil & Gas /Upstream /Downstream industry operatives and Government agencies</li>
        </ul>
        <p>Our professional approach ensures that the right human and capital resources are available for discharging every aspect of the project.
          We constantly train and motivate our staff to ensure that we continue to deliver on our promise of excellent service.
        </p>
      </div>
      <h3> Message From our Executive  Chairman</h3>
      <div className="mission-vision-container">
        <div className="mission-card">
          <FaBullseye className="icon" />
          <h3>Our Mission</h3>
          <p>To provide each client with professional, comprehensive and efficient service.</p>
          <p>To continue to be a custodian of trust for owners/operators as we manage their interests and strive to make each port call and any Oil and Gas trading transaction a complete and cost effective operational success.</p>
        </div>
        <div className="vision-card">
          <FaEye className="icon" />
          <h3>Our Vision</h3>
          <p>To be the foremost Shipping, Oil and Gas Company known for her high levels of efficiency and integrity with the most satisfied customers; ensuring that all stakeholders are justifiably proud to be associated with "Dowell Maritime & Oil Resources Ltd."</p>
        </div>
      </div>
      <img
        src="/assets/CEO 2.jpeg"
        alt="CEO"
      />
      <div className="board-management">
        <h3>Board and Management</h3>
        <p>At DOWELLMARITIME, we are guided by a visionary board of directors and an exceptional management team, united in our commitment to driving the success and growth of our organization. With our collective expertise, forward-thinking strategies, and unwavering dedication to excellence, we lay the foundation for innovation, profitability, and sustainable success.</p>
        <h4>Board of Directors: Shaping the Future</h4>
        <p>Our esteemed board of directors is composed of accomplished leaders, industry veterans, and experts in their respective fields. They bring a wealth of knowledge, strategic insights, and diverse perspectives that steer our organization towards new horizons. Through their visionary guidance, they ensure that our strategic goals are aligned with market dynamics, customer needs, and long-term sustainability.</p>
        <p>Key responsibilities of our board of directors include:</p>
        <ul>
          <li>Strategic Planning: Our board oversees the development and implementation of strategic plans that drive our organization's growth, competitive advantage, and financial success. They conduct thorough market analyses, assess industry trends, and provide guidance on new business opportunities and expansion initiatives.</li>
          <li>Risk Management: We prioritize effective risk management, and our board plays a crucial role in identifying potential risks and implementing robust mitigation strategies. They establish governance frameworks, ensure compliance with regulatory requirements, and foster a culture of ethical decision-making and responsible business practices.</li>
          <li>Talent Management: Our board recognizes the importance of attracting and retaining top talent. They provide guidance on executive appointments, succession planning, and talent development strategies. Their focus on cultivating a diverse and inclusive workforce enhances our organizational capabilities and fosters innovation.</li>
        </ul>
        <h4>Management Team: Driving Operational Excellence</h4>
        <p>Our exceptional management team translates the strategic vision set by the board into action, leading our organization with passion, expertise, and a relentless pursuit of operational excellence. They combine a wealth of industry experience, business acumen, and leadership skills to guide our day-to-day operations, inspire our employees, and deliver exceptional value to our stakeholders.</p>
        <p>Key responsibilities of our management team include:</p>
        <ul>
          <li>Leadership and Vision: Our management team sets a clear direction, fosters a culture of collaboration and innovation, and empowers our employees to achieve their full potential. They inspire a shared vision, encourage creativity, and foster an environment where individuals are motivated to excel and contribute their best.</li>
          <li>Operational Efficiency: Our management team is committed to maximizing operational efficiency and delivering outstanding results. They implement robust processes, optimize workflows, and leverage technology to streamline operations, reduce costs, and enhance productivity. Their focus on continuous improvement drives innovation and agility across all functions.</li>
          <li>Stakeholder Engagement: Our management team recognizes the importance of building strong relationships with our stakeholders. They foster open and transparent communication, ensuring that our investors, customers, employees, and partners are engaged, informed, and aligned with our strategic goals. By actively listening to feedback and addressing concerns, they nurture long-term partnerships and drive customer loyalty.</li>
          <li>Financial Performance: Our management team maintains a keen focus on financial performance, working diligently to achieve sustainable growth and profitability. They develop comprehensive financial strategies, optimize resource allocation, and make data-driven decisions to ensure the long-term financial health of our organization.</li>
        </ul>
        <p>Together, our board of directors and management team forge a strong partnership, combining strategic vision with operational excellence. They inspire our employees, nurture a culture of innovation, and ensure that our organization remains at the forefront of our industry.</p>
      </div>
    </div>
  );
}
