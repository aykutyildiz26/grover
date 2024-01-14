import { groverLogo } from "../../image-paths.js";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-topside">
        <div className="footer-container">
          <div className="grover-logo">
            <img src={groverLogo} alt="Grover Logo" />
            <h2>Grover</h2>
          </div>
          <p className="footer-description">
            Fast delivery, which is active all over the world, serves with many
            transportation vehicles.
          </p>
        </div>
        <div className="footer-container">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-list-container">
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Blog</li>
            <li className="footer-list-item">All Products</li>
            <li className="footer-list-item">Locations Map</li>
          </ul>
        </div>
        <div className="footer-container">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list-container">
            <li className="footer-list-item">Order tracking</li>
            <li className="footer-list-item">Whish List</li>
            <li className="footer-list-item">My account</li>
            <li className="footer-list-item">Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-container">
          <h3 className="footer-title">Get in Touch</h3>
          <p className="footer-description">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
        </div>
      </div>
      <div className="footer-bottomside">
        <span className="footer-reserved">
          All Rights Reserved @ BESNIK 2021
        </span>
        <div className="footer-bottomside-container">
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
