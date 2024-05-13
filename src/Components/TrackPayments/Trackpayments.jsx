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
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "90px",
      }}
    >
      <div
        style={{
          backgroundColor: "#DBF1FA",
          padding: "60px",
          position: "relative",
          width: "450px",
          height: "640px",
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              width: "433px",
              height: "65px",
              borderRadius: "10px",
              boxShadow:
                "0px 3px 5px rgba(0, 0, 0, 0.2), 0px 14px 10px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              marginBottom: "20px",
              position: "absolute",
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

              left: index === 1 ? "30%" : index === 2 ? "20%" : "unset",
            }}
          >
            <img
              src={card.image}
              alt={`Image ${index + 1}`}
              style={{ width: "50px" }}
            />
            <div style={{ marginLeft: "40px" }}>
              <h2>{card.heading}</h2>
              <p>{card.paragraph}</p>
            </div>
          </div>
        ))}
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
