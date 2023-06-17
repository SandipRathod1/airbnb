import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  return (
    <>
      <div className="navbar2">
        <div className="img1">
          <img src="public\images\asset 14.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <h3>OMG!</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 7.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/rooms"}>
            <h3>Rooms</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 15.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/bedroom"}>
            <h3>Bed & breakfasts</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 16.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/cabins"}>
            <h3>Cabins</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 29.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/castles"}>
            <h3>Castles</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 37.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/mansion"}>
            <h3>Mansions</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 6.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/farms"}>
            <h3>Farms</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 8.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/view"}>
            <h3>Amazing View</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 12.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/pools"}>
            <h3>Amazing pools</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 11.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/beach"}>
            <h3>Beachfront</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 13.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/country"}>
            <h3>Countryside</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 18.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/tropils"}>
            <h3>Tropicals</h3>
          </Link>
        </div>
        <div className="img1">
          <img src="public\images\asset 25.jpeg" />
          <Link style={{ textDecoration: "none" }} to={"/lake"}>
            <h3>Lakefront</h3>
          </Link>
        </div>
        <div className="img1">
          <div className="im">
            <img
              style={{ textDecoration: "none" }}
              src="public\images\asset 96.svg"
              alt=""
            />
            <h6>Filters</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
