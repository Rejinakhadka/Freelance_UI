import React from "react";
import { assets } from "../../assets/assets";
import "../Automated/styles.css";
import "./styles.css";

const Savemoney = () => {
  return (
    <div className="savemoney-container">
      <div className="savemoney-content">
        <div style={{ color: " #3734A9" }}>WHY CHOOSE US</div>
        <h1>Save money with proper transaction</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div style={{ position: "relative" }}>
          <img
            src={assets.comment}
            style={{
              width: "50px",
              marginTop: "-5%",
              marginLeft: "30px",
              position: "absolute",
              zIndex: "1",
            }}
          />
          <div className="savemoney-description">
            <p>
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows .
              <div style={{ marginTop: "20px" }}>-Mike Taylor</div>
            </p>
          </div>
        </div>
      </div>

      <div className="total-balance">
        <img
          src={assets.blackstrokes}
          style={{ top: "40px", left: "-40px", position: "absolute" }}
        />
        <div className="totalbalance-card">
          <h1 style={{ fontWeight: "400", fontSize: "19px" }}>Total Balance</h1>
          <h style={{ fontWeight: "700", fontSize: "22px" }}>
            $4,200 <span className="total-balance-span">+14%</span>
          </h>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            {" "}
            <img src={assets.numbers} />
            <img src={assets.charts} />
          </div>
        </div>
        <img
          src={assets.hand}
          style={{
            position: "absolute",
            top: "-150px",
          }}
        />
      </div>
    </div>
  );
};

export default Savemoney;
