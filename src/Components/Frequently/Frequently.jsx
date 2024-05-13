import React from "react";
import { assets } from "../../assets/assets";
import "./styles.css"

const faqData = [
  {
    question:
      "The expense windows adapted sir. Wrong widen drawn.",
      paragraph:"Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
      image:assets.plus
  },
  {
    question:
      "Six curiosity day assurance bed necessary?",
      image:assets.plus
  },
  {
    question:
      "Produce say the ten moments parties?",
      image:assets.plus
  },
  {
    question:
      "Simple innate summer fat appear basket his desire joy?",
      image:assets.plus
  },
  {
    question:
      "Outward clothes promise at gravity do excited?",
      image:assets.plus
  }
];

const Frequently = () => {
  return (
    <div className="faq-container">
      <div style={{fontSize:'61px',fontWeight:"800",letterSpacing:"-3%", lineHeight:"76px", width:"500px"}}>Frequently asked questions</div>
      <div style={{display:"flex", gap:"10px", marginTop:"30px",width:"100%", justifyContent:'space-between'}}>
       <div  >
        {faqData.map((faq, index) => (
          <div key={index} className="faq-questions">
            <h1>{faq.question}  <img src={faq.image}/> </h1>
            <p>{faq.paragraph}</p>
           
          </div>
        ))}
     
      </div>
      <div  className="faq-card">
          <img src={assets.card01} alt="FAQ" />
          <h1>Do you have more questions?</h1>
          <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
          <button>Shoot a Direct Mail</button>
        </div></div>
    
       
      </div>
 
  );
};

export default Frequently;
