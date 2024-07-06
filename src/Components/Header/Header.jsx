import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Home from "./HeaderContaint/Home";

const Header = ({ isDarkmode, onToggle }) => {
  return (
    <>
      <div className="Header-Routs">
        <h4>Pavankumar Suryawanshi</h4>
        {/* <button
          className="toggle"
          onClick={onToggle}
          style={{
            background: `${isDarkmode ? "rgba(255,255,255,1)" : "#333"}`,
          }}
        >
          <div
            className="btn"
            style={{
              marginLeft: `${isDarkmode ? "40px" : "2px"}`,
              background: `${isDarkmode ? "#333" : "#fff"}`,
            }}
          />
        </button> */}
        {/* <ul>
          <li ><span><Link to={"/Home"} style={{ color: `${isDarkmode ? "#fff" : "#4c4c4c"}` }}>Home</Link></span></li>
          <li ><span><Link to={"/About"} style={{ color: `${isDarkmode ? "#fff" : "#4c4c4c"}` }}> About</Link></span></li>
        </ul> */}
        
      </div>
      {/* <h1 style={{ color: `${isDarkmode ? "#fff" : "#4c4c4c"}` }}>Hi I am header</h1> */}
      <Home />
    </>
  );
};

export default Header;
