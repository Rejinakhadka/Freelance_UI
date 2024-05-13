import React from "react";
import "./styles.css";

import { assets } from "../../assets/assets";

const Automated = () => {
  return (
    <div className="automated-container">
      <div className="automated-text">
        <h1>Automated portfolio tracking</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <img src={assets.comment} style={{ width: "50px", marginTop: "-5%",marginLeft:"30px", position: "absolute", zIndex: "1" }} />
        <div className="automated-description">
          <p>
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows adapted sir. Wrong
            widen.
            <div style={{marginTop:"20px"}}>-Mike Taylor</div>
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Automated;
