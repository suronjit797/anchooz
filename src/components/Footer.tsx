import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo_white.webp";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container">
        <h3 className="footer_head ">
          <Link to="/" className="fw-bold text-white">
            <img src={logo} alt="ANCHOOZ" width={150} />
          </Link>
        </h3>
        <p className="footer-text">Copyright © {new Date().getFullYear()} | All rights reserved</p>
        <div className="footer_icon">
          <a href="#" target="_blank">
            <i className="facebook">
              <FaFacebookF />
            </i>
          </a>
          <a href="#" target="_blank">
            <i className="instagram">
              <FaInstagram />
            </i>
          </a>
          <a href="#" target="_blank">
            <i className="twitter">
              <FaTwitter />
            </i>
          </a>
          <a href="#" target="_blank">
            <i className="youtube">
              <FaYoutube />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
