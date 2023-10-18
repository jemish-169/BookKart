import { RoutePaths } from "../../utils/enum";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/tatvasoftLogo.png";
import footerStyles from "./footerStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <footer>
        <Link to={RoutePaths.Login}>
          <img src={siteLogo} width="160" alt="tatvasoft.svg"></img>
        </Link>
      </footer>
      <div className={footerStyles.footerContent}>
        <FontAwesomeIcon icon={faCopyright} /> © All rights reserved. By Jemish
        Khunt
      </div>
    </div>
  );
};
