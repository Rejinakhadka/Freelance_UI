import React from 'react';
import './styles.css';
import monday from "../../assets/monday.png";
import morpheus from "../../assets/morpheus.png";
import Open from "../../assets/Open.png";
import oracle from "../../assets/oracle.png";
import protonet from "../../assets/protonet.png";
import samsung from "../../assets/samsung.png";
import segment from "../../assets/segment.png";



const images = [
  { src: monday, alt: "Monday" },
  { src: morpheus, alt: "Morpheus" },
  { src: Open, alt: "Open" },
  { src: oracle, alt: "Oracle" },
  { src: protonet, alt: "Protonet" },
  { src: samsung, alt: "Samsung" },
  { src: segment, alt: "Segment" }
];

const Company = () => {
  return (
    <div className='container'>
      <div className="company-text">Over 32k+ software businesses growing with AR Shakir.</div>
      <div className="images-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={{ width: '100px' }} />
        ))}
      </div>
    </div>
  );
};

export default Company;
