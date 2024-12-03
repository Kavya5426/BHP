import React, { useState } from "react";
import "../../styling/GiftInventory.css";

const GiftInventory = () => {
  const [showPopup, setShowPopup] = useState(null);

  // Sample data
  const giftData = [
    { itemName: "Gift Item 1", items: 50, date: "2024-12-01" },
    { itemName: "Gift Item 2", items: 30, date: "2024-12-02" },
  ];

  // Handlers
  const togglePopup = (type) => setShowPopup(type);

  return (
    <div className="gift-inventory">
      {/* Rectangle with Scrollable Table */}
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>No. of Items</th>
              <th>Date of Arrival</th>
            </tr>
          </thead>
          <tbody>
            {giftData.map((gift, index) => (
              <tr key={index}>
                <td>{gift.itemName}</td>
                <td>{gift.items}</td>
                <td>{gift.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards */}
      <div className="cards-wrapper">
        <div className="card" onClick={() => togglePopup("giftIn")}>
          Gift-in
        </div>
        <div className="card" onClick={() => togglePopup("giftStock")}>
          Gift-stock
        </div>
        <div className="card" onClick={() => togglePopup("redeemableGifts")}>
          Redeemable Gifts
        </div>
        <div className="card" onClick={() => togglePopup("redeemedGifts")}>
          Redeemed Gifts
        </div>
      </div>

      {/* Pop-ups */}
      {showPopup === "giftIn" && (
        <div className="popup">
          <h3>Gift-in</h3>
          <form>
            <label>Item Name:</label>
            <input type="text" placeholder="Enter item name" />
            <label>Number of Items:</label>
            <input type="number" placeholder="Enter number of items" />
            <label>Date of Arrival:</label>
            <input type="date" />
            <button type="submit">Submit</button>
            <button onClick={() => togglePopup(null)}>Close</button>
          </form>
        </div>
      )}
      {showPopup === "giftStock" && (
        <div className="popup">
          <h3>Gift-stock</h3>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Date</th>
                <th>No. of Items</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate with calculated stock */}
            </tbody>
          </table>
          <button onClick={() => togglePopup(null)}>Close</button>
        </div>
      )}
      {showPopup === "redeemableGifts" && (
        <div className="popup">
          <h3>Redeemable Gifts</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>No. of Items</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate with redeemable data */}
            </tbody>
          </table>
          <button onClick={() => togglePopup(null)}>Close</button>
        </div>
      )}
      {showPopup === "redeemedGifts" && (
        <div className="popup">
          <h3>Redeemed Gifts</h3>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Card Number</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>No. of Items</th>
                <th>Points Deducted</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate with redeemed gift data */}
            </tbody>
          </table>
          <button onClick={() => togglePopup(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default GiftInventory;
