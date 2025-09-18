import HeroSlider from "../components/HeroSlider";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HeroSlider />
      <section className="home-section">
        <h2>Welcome to Dowell Maritime & Oil Resources Ltd</h2>
        <p>
          Dowell Maritime & Oil Resources Ltd is fully owned by reputable Nigerians. Dowell has capacity in upstream and downstream operation.
          for over fifteen (15) years of our existence, we grew like an oak tree to attain multi-national company status with branches from Nigeria to Hong-Kong and to United States of America.
        </p>
        <p>We have continued to hone our skills in the Downstream in Ship Agency Services, Ship Management, Oil & Gas Trading while in the Upstream, we provide Offshore industry Support Services, Sales and Leasing of Capital Goods, Special Transportation, Provision of Marine Vessels Supply and Operation, Marine Security and Escort. Mooring Services, House Boats, Tugboats and Berges, etc </p>
        <p>In addition to our Ship Agency, we manage vessels and broker charter to cargo owners. We trade in clean petroleum products, supply bulk cargoes to international Oil Companies, Independent Petroleum marketers, Oil rigs, terminals and platforms offshore. We are flexible and able to attend to calls anywhere, anytime and we have capacity to service delivery</p>
        <p>We provide world-class maritime logistics, shipping, and port services.</p>
      </section>
    </div>
  );
}
