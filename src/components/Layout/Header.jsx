import React, { useState } from "react";
import user from "../../assets/user.jpg";
import logo from "../../assets/logo.png";
import ContactForm from "../ContactForm";
import "../../assets/Styles/Header.css";
import location from "../../assets/location.png";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <ContactForm showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <header>
        <img className="logo" src={logo} alt="logo" />
        <ul className="header-list">
          <li className="header-list-items">
            <i className="fa-solid fa-house"               style={{ color: "#FF6969" }}
></i>
            &nbsp; Home
          </li>
          <li className="header-list-items">
            <i
              className="fa-solid fa-address-card"
              style={{ color: "#FF6969" }}
            ></i>
            &nbsp;
            <a
              href="#services"
              style={{ textDecoration: "none", color: "black" }}
            >
              About{" "}
            </a>
          </li>
          <li className="header-list-items" onClick={() => setShowModal(true)}>
            <i
              className="fa-solid fa-address-book"
              style={{ color: "#FF6969" }}

            ></i>
            &nbsp; Contact
          </li>
          <li className="header-list-items">
           <img src={location} alt="" height={"20px"} width={"20px"}/>
            &nbsp;
            <a
              href="#location"
              style={{ textDecoration: "none", color: "black" }}
            >
              Location
            </a>
          </li>
        </ul>

        <div className="user">
          <img src={user} alt="" />
          <p>John</p>
        </div>
      </header>
    </>
  );
}

export default Header;
