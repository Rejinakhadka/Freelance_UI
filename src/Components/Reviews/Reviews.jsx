import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const statisticsData = [
  { value: "1M+", label: "Active Users", icon: assets.users },
  { value: "30K+", label: "5-Stars Reviews", icon: assets.stars },
  { value: "$252M", label: "Transactions", icon: assets.stars }
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews">
        <div style={{width:"142px", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <p>We speak with our powerful statistics</p>
        </div>
        <div style={{border:"2px solid #3D3D3D"}}></div>
        {statisticsData.map((statistic, index) => (
          <div key={index}>
            <h1>{statistic.value}</h1>
            <p><img src={statistic.icon} alt={statistic.label} /> {statistic.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
