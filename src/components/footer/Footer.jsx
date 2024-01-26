import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { SlTarget } from "react-icons/sl";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Cinematech, where the magic of cinema meets cutting-edge
          technology! Immerse yourself in a world of captivating storytelling
          and breathtaking visuals as we curate a cinematic experience like no
          other. Cinematech is your digital gateway to the latest blockbusters,
          timeless classics, and hidden gems, seamlessly blending the art of
          filmmaking with the advancements of technology. Explore our vast
          library, where every film is a journey waiting to unfold. From the
          silver screen to your screen, Cinematech brings the magic of movies to
          your fingertips. Get ready to embark on a visual adventure that
          transcends boundaries – welcome to Cinematech, where every click is a
          ticket to cinematic excellence! <br />
          <div className="nme">
            <span>This Website is Created And Designed By Rohan with</span>{" "}
            <p>💕</p>
          </div>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF onClick={() => navigate("404")} />
          </span>
          <span className="icon">
            <FaInstagram onClick={() => navigate("/https://www.instagram.com/rohan_bankar_20?utm_source=qr")} target="_blank"/>
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
