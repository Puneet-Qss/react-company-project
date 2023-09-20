import React from "react";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github-mark.png";
import "../assets/Styles/Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="left-component">
          <ul className="left-list">
            <li className="left-list-item">
              {" "}
              <img src={facebook} alt="" />
              facebook
            </li>
            <li className="left-list-item">
              <img src={github} alt="" />
              Github
            </li>
            <li className="left-list-item">
              <img src={twitter} alt="" />
              twitter
            </li>
            <li className="left-list-item">
              <img src={telegram} alt="" />
              telegram
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <h3>Choose your way</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            sunt ducimus nihil, doloremque ex, odit veniam voluptatibus ut fuga,
            
          </p>
        </div>

        <div className="newsletter">
          <h3>Signup with our Newsletter</h3>
          <form action="">
            <input type="email" />
            <button>Signup!</button>
          </form>
          <p>Developed By ~ Punit </p>
        </div>
     
      </footer>
    </>
  );
}

export default Footer;
