import React, { useRef } from "react";
import "../../styling/AdminDashboard.css";
import GiftInventory from "../ManagerDashboard/GiftInventory";
import DataAnalytics from "./DataAnalytics";
const AdminDashboard = () => {
  // Refs to scroll to sections
  const mainPageRef = useRef(null);
  const dataAnalyticsRef = useRef(null);
  const giftInventoryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="dashboard-item" onClick={() => scrollToSection(giftInventoryRef)}>
          Gift Inventory
        </div>
        <div className="dashboard-item" onClick={() => scrollToSection(dataAnalyticsRef)}>
          Data Analytics
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
          {/* Main Page */}
        <section ref={mainPageRef} className="section main-section">
          <h1>Welcome to Admin Dashboard</h1>
        </section>
        <section ref={giftInventoryRef} className="section">
          <h1>Gift Inventory</h1>
          <GiftInventory />
        </section>
        <section  className="section">
          <h1>Graph</h1>
          
        </section>
      </div>
    </div>
  );
  };
export default AdminDashboard;
