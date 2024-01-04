import PropTypes from "prop-types";
import classNames from "classnames";
import { shoppingBagIcon, groverLogo, searchIcon } from "../../image-paths.js";
import "./header.css";

function Header({ isMenuOpen, setIsMenuOpen }) {
  //const navLinks = ["home", "menu", "service", "shop"];
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="hero-header">
      <nav className="hero-header-navigator">
        <div className="grover-logo hamburger" onClick={handleMenu}>
          <img id="hamburger-btn" src={groverLogo} alt="Grover" />
          <h2>Grover</h2>
        </div>
        <ul
          className={classNames("hero-navigator-menu", {
            active: isMenuOpen,
          })}
        >
          <li className="nav-item">Home</li>
          <li className="nav-item">Menu</li>
          <li className="nav-item">Service</li>
          <li className="nav-item">Shop</li>
        </ul>
        <div className="search-container">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search" />
          <img src={shoppingBagIcon} alt="" />
          <span>2</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
