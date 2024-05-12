
import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const Card = ({ imageUrl, header, description, number }) => {
  return (
    <div className="card">
      <div className="card-number">{number}</div>
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <h2 className="card-header">{header}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards-container">
      <Card
        imageUrl={assets.card01}
        header="Connect wallets & companies"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
        number="01"
      />
      <Card
        imageUrl={assets.card02}
        header="Review transactions"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
        number="02"
      />
      <Card
        imageUrl={assets.card03}
        header="Get income insights"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ."
        number="03"
      />
    </div>
  );
};

export default Cards;
