import React, { useState } from "react";
import user from "../assets/user.jpg";
import logo from '../assets/logo.png';
import '../assets/Styles/Header.css';
import Modal from "./Modal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} /> : null}
      <header>
        <img className="logo" src={logo} alt="logo" />
        <ul className="header-list">
          <li className="header-list-items">
            <i className="fa-solid fa-house" style={{ color: "skyblue" }}></i> 
            &nbsp; Home
          </li>
          <li className="header-list-items">
            <i className="fa-solid fa-address-card" style={{ color: "skyblue" }}></i>
            &nbsp; About
          </li>
          <li className="header-list-items" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-address-book" style={{ color: "skyblue" }}></i>
            &nbsp; Contact
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
