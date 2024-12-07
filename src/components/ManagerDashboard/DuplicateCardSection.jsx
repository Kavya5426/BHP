import React, { useState } from "react";
import "../../styling/DuplicateCardSection.css";

const DuplicateCardSection = () => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [cardNumberToBlock, setCardNumberToBlock] = useState("");
  const [newCardNumber, setNewCardNumber] = useState("");

  const handleFetchDetails = (e) => {
    e.preventDefault();
    // Simulate fetching customer details using the mobile number
    setCustomerDetails({
      name: "John Doe",
      customerId: "12345",
      cardNumber: "987654321",
    });
  };

  const handleBlockCard = (e) => {
    e.preventDefault();
    if (cardNumberToBlock === customerDetails.cardNumber) {
      setCustomerDetails({ ...customerDetails, cardNumber: null });
      alert("Card has been blocked successfully!");
    } else {
      alert("Invalid card number!");
    }
  };

  const handleGenerateNewCard = (e) => {
    e.preventDefault();
    const generatedCardNumber = `CARD-${Math.floor(Math.random() * 1000000)}`;
    setNewCardNumber(generatedCardNumber);
    setCustomerDetails({ ...customerDetails, cardNumber: generatedCardNumber });
    alert(`New Card Generated: ${generatedCardNumber}`);
  };

  const handleGenerateBill = (e) => {
    e.preventDefault();
    alert("Bill generation form would open here!");
  };

  return (
    <div className="duplicate-card-section">
      <h2>Duplicate Card</h2>
      {/* Fetch Customer Details */}
      <form className="fetch-details-form" onSubmit={handleFetchDetails}>
        <label>Enter Contact Number:</label>
        <input type="text" placeholder="Enter phone number" required />
        <button type="submit">Fetch Details</button>
      </form>

      {/* Display Customer Details */}
      {customerDetails && (
        <div className="customer-details">
          <h3>Customer Details:</h3>
          <p>Name: {customerDetails.name}</p>
          <p>Customer ID: {customerDetails.customerId}</p>
          <p>Card Number: {customerDetails.cardNumber || "No active card"}</p>

          {/* Block Card Button */}
          <form className="block-card-form" onSubmit={handleBlockCard}>
            <label>Enter Card Number to Block:</label>
            <input
              type="text"
              placeholder="Enter card number"
              value={cardNumberToBlock}
              onChange={(e) => setCardNumberToBlock(e.target.value)}
              required
            />
            <button type="submit">Block Card</button>
          </form>

          {/* Generate Duplicate Card Button */}
          <form className="generate-card-form" onSubmit={handleGenerateNewCard}>
            <label>Generate New Card:</label>
            {newCardNumber && <p>New Card Number: {newCardNumber}</p>}
            <button type="submit">Generate New Card</button>
          </form>
        </div>
      )}

      {/* Generate Bill Button */}
      <button className="generate-bill-btn" onClick={handleGenerateBill}>
        Generate Bill
      </button>
    </div>
  );
};
export default DuplicateCardSection;
