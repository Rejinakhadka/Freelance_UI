import React, { useState } from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const footerSections = [
  {
    title: "AR Shakir",
    content: "Finance helps companies manage payments easily.",
    images: [
      assets.linkedin,
      assets.messenger,
      assets.twitter,
      assets.eight
    ]
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Blog", "Pricing"]
  },
  {
    title: "Resources",
    links: ["Proposal Template", "Invoice Template", "Tutorial", "How to write a contract"]
  },
  {
    title: "Join Our Newsletter",
    content: "* Will send you weekly updates for your better finance management."
  }
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Submitted email:", email);
   
    setEmail("");
  };

  return (
    <div className="footer-container">
      {footerSections.map((section, index) => (
        <div key={index} className="footer-content">
          <h1>{section.title}</h1>
          {section.title === "Join Our Newsletter" ? (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Your email address"
              />
              <button type="submit">Subscribe</button>
              <p>{section.content}</p>
            </form>
          ) : (
            <>
              <p>{section.content}</p>
              {section.links && (
                <div>
                  {section.links.map((link, idx) => (
                    <div className="footer-list" key={idx}>{link}</div>
                  ))}
                </div>
              )}
            </>
          )}
  
          {section.images && (
            <div style={{display:"flex", gap:"22px", marginTop:"50px", cursor:"pointer"}}>
              {section.images.map((image, idx) => (
                <img src={image} alt={`Image ${idx}`} key={idx} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Footer;
