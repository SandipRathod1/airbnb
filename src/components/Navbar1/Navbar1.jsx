import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={'/'}><img src="public\images\asset 87.svg" alt="airbnb" /></Link>
        </div>
        <div className="mid">
          <h4>Anywhere</h4>
          <h4>Any week</h4>
          <h4>Add guests</h4>
          <img src="public\images\asset 89.svg" alt="serch" />
        </div>
        <div className="end">
          <h4>Airbnb your home</h4>
          <img id="one" src="public\images\asset 91.svg" alt="world" />
          <div className="imgages">
          <img id="two" src="public\images\asset 92.svg" alt="line" />
          <img id="three" src="public\images\asset 93.svg" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
