import React from 'react';
import Hands from "../../assets/Hands.png";
import Polygon from "../../assets/Polygon 2.png";
import tick from "../../assets/tick.png";
import "./styles.css";

const Herosection = () => {
  return (
    <div className="herosection-container">
      <div className="herosection-text">
        <h1>Managing freelance payments has never been easier</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
        <div className="flex-container">
          <button className="herosection-button">Get Started</button>
          <p className="see-how-it-works">
            <img src={Polygon} style={{width:"50px"}} alt="Polygon" /> See How it Works
          </p>
        </div>
        <div className="tick-container">
          <img src={tick} alt="Tick" />
          <p>Free Service</p>
          <img src={tick} alt="Tick" />
          <p>Great Service</p>
        </div>
      </div>
      <div className="herosection-image">
        <img src={Hands} alt="Hands" />
      </div>
    </div>
  );
};

export default Herosection;
