import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const Trackpayments = () => {
  const cardsData = [
    {
      image: assets.woman,
      heading: "+ $28,900",
      paragraph: "Received from Michael V",
    },
    {
      image: assets.girl2,
      heading: "+ $28,900",
      paragraph: "Received from Michael V",
    },
    {
      image: assets.thinkingboy,
      heading: "+ $28,900",
      paragraph: "Received from Michael V",
    },
    {
      image: assets.laughingboy,
      heading: "+ $28,900",
      paragraph: "Received from Michael V",
    },
  ];

  return (
    <div
      className="track-container"
    >
      <div
       className="track-content"
      >
      <img src={assets.orange} />
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="track-cards"
            style={{
             

              top:
                index === 0
                  ? "10%"
                  : index === 1
                  ? "30%"
                  : index === 2
                  ? "50%"
                  : index === 3
                  ? "70%"
                  : index * 160 + "px",

              left: index === 1 ? "30%" : index === 2 ? "20%" :index ===0 ?"7%" :index ===3 ?"9%" :"unset",
            }}
          >
            <img
              src={card.image}
              alt={`Image ${index + 1}`}
              style={{ width: "50px" }}
            />
            <div className="track-cards-text" >
              <h2>{card.heading}</h2>
              <p>{card.paragraph}</p>
            </div>
          </div>
        ))}
        <img src={assets.green} style={{ position: "absolute", bottom: "0px", left: "0px" }} />
      </div>
      <div className="whychooseus-container">
        <h2>WHY CHOOSE US</h2>
        <h1>Track your payments on the go with the best way possible</h1>
        <p>
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <div className="line"></div>
        <div className="checklist">
        <p>
          <span className="checkmark">&#10004;</span> Get Overview at a glance
        </p>
        <p>
          <span className="checkmark">&#10004;</span> Deoposit funds easily, securlity
        </p>
        <p>
          <span className="checkmark">&#10004;</span> Get Live Support
        </p>
      </div>
      </div>
    </div>
  );
};

export default Trackpayments;
