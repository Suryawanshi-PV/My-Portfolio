// Layout.jsx
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Layout.css";

const Layout = () => {
  const [isDarkmode, setDarkmode] = useState(false);
  const darkModeHandler = () => {
    setDarkmode(!isDarkmode);
  };

  return (
    <>
      <div className="Father-DIV" style={{ background: `${isDarkmode ? "#3f3f3f" : "#fff"}` }} >
       
        <Header isDarkmode={isDarkmode}  onToggle={darkModeHandler}></Header>
        <Outlet isDarkmode={isDarkmode} onToggle={darkModeHandler}></Outlet>
        <Footer isDarkmode={isDarkmode} onToggle={darkModeHandler}></Footer>
      </div>
    </>
  );
};

export default Layout;
