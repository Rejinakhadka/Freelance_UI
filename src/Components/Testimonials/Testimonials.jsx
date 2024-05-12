import React from "react";
import "./styles.css";
import { assets } from "../../assets/assets";

const testimonialsData = [
  {
    id: 1,
    image: assets.girl,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "Mike Taylor",
  },
  {
    id: 2,
    image: assets.boy,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "John Doe",
  },
  {
    id: 3,
    image: assets.girl,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "Mike Taylor",
  },
  {
    id: 4,
    image: assets.boy,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "John Doe",
  },
  {
    id: 5,
    image: assets.girl,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "Mike Taylor",
  },
  {
    id: 6,
    image: assets.boy,
    content:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.",
    author: "John Doe",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div>
        <h1>Testimonials</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testimonial) => (
          <div className="testimonials-box" key={testimonial.id}>
          <img src={assets.comment} className="comment-icon "/>
            <p>
              {testimonial.content}
              <div style={{ marginTop: "20px" }}>-{testimonial.author}</div>
            </p>
            <img src={testimonial.image} alt="Testimonial"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
