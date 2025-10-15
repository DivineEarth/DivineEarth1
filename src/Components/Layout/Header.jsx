import "./Header.css";
import React from "react";
import logo from "../../images/logo/logo.png";

function Navbar({ onUserIconClick }) {
  return (
    <div className="nav_cont d-flex align-items-center">
      <nav className="navbar p-2 d-flex justify-content-space-around">
        <div className="left_nav">
          <i className="fa-solid fa-bars hamb_icon"></i>
          <i className="fa-solid fa-magnifying-glass search_icon ml-0"></i>
        </div>

        <a className="navbar-brand pt-4 pb-4" href="/">
          <img
            src={logo}  
            width="150"
            height="150"
            className="logo_img m-0"
            alt="Logo"
          />
        </a>

        <h6 className="nav_option" id="plantAndGiftBtn">
          Plant and gift
        </h6>
        <h6 className="nav_option" id="companyBtn">
          For companies
        </h6>
        <h6 className="nav_option" id="aboutusBtn">
          About us
        </h6>
        <button className="nav_btn" id="navBtn">
          <i className="fa-solid fa-seedling plant_icon"></i> Did you receive a gift?
        </button>
      </nav>

      <div className="right_nav">
        <i className="fa-regular fa-user" onClick={onUserIconClick} style={{ cursor: "pointer" }}></i>
        <i className="fa-solid fa-magnifying-glass search_icon_lg"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}

export default Navbar;