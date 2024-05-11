import React from "react";
import "./styles.css";
import Dropdown from "../../assets/Dropdown.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <h1>AR SHAKIR</h1>
      </div>
      <div className="middle-section">
        <ul className="nav-list">
          <li >
            <a href="#">Product <img src={Dropdown} style={{marginLeft:"12px"}}/> </a>
          </li>
          <li>
            <a href="#">Template  <img src={Dropdown} style={{marginLeft:"12px"}}/></a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="right-section" style={{ gap:"12px", alignContent:"center", textAlign:"center"}}>
        <a href="#">Sign In</a>
        <button>Start Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
