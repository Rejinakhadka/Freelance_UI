import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const Features = () => {
  const features = [
    {
      id: 1,
      image: assets.card01,
      title: "Really boy law county she unable her sister",
      description: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      id: 2,
      image: assets.card02,
      title: "Among sex are leave law built now",
      description: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    }
  ];

  return (
    <div className="features-container">
      <div className="features-text">
        <h1>Features that blow minds</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="features-cards">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img src={feature.image} alt="Feature Image" />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
          <div className="additional-cards">
          <div className="additional-card">
            <h2>Merits behind on afraid or warmly</h2>
          </div>
          <div className="additional-card">
            <h2>Believing neglected so so allowance existence</h2>
          </div>
        </div>
        </div>
      
       
      </div>
      <img src={assets.blackstrokes} className="blackstrokes-img" />
    </div>
  );
};

export default Features;
