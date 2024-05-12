import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

export const Blogs = () => {
    const blogData = [
        {
          category: "Best Practices",
          title:
            "Partiality on or continuing particular principles as. ",
          image: assets.workingmen
        },
        {
          category: "Best Practices",
          title:
            "Village did removed enjoyed explain",
          image: assets.building
        },
        {
          category: "Best Practices",
          title:
            "Wise busy past both park when an ye no. Nay likely her length.",
          image: assets.work
        }
      ];
  return (
    <div className="blogs-container">
      <div style={{fontWeight:"800", fontSize:"71px", letterSpacing:"-3%", marginBottom:"50px"}}>Recent Blogs</div>
      <div className="blogs-content" > 
      <div className="blogs-content-text">
        <p>BEST PRACTICES</p>
        <h1>
          In design active temper be uneasy. Thirty for remove plenty regard.
        </h1>
        <a style={{fontSize:"16px", fontWeight:"600"}}>Read More</a>
      </div>
      <img src={assets.corporateteam}/>
      </div>
      <div className="blogs-best">
      {blogData.map((blog, index) => (
          <div className="blogs-best-card"  key={index}>
            <p>{blog.category}</p>
            <h1>{blog.title}</h1>
            <img src={blog.image} key={index} alt="Blog" />
          </div>
        ))}
        
      </div>
     
     
    </div>
  );
};
