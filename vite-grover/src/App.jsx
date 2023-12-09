import { useState, useEffect, useRef } from "react";
import "./App.css";
import hamburgerComponent from "./assets/scripts/hamburger.jsx"
import * as images from "./image-paths.js";


function App() {
  const [count, setCount] = useState(0);

  const navigatorMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);
  const isOnMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleHamburgerClick = () => {
      navigatorMenuRef.current.classList.toggle("active");
    };

    if (navigatorMenuRef.current && hamburgerBtnRef.current) {
      hamburgerBtnRef.current.addEventListener("click", handleHamburgerClick);
    }

    return () => {
      if (hamburgerBtnRef.current) {
        hamburgerBtnRef.current.removeEventListener("click", handleHamburgerClick);
      }
    };
  }, [isOnMobile]);

  return (
    <>
      <main>
        <header className="hero-header">
          <nav className="hero-header-navigator">
            <div className="grover-logo hamburger">
              <img id="hamburger-btn" src={images.groverLogo} alt="Grover" ref={hamburgerBtnRef} />
              <h2>Grover</h2>
            </div>
            <ul className="hero-navigator-menu" ref={navigatorMenuRef}>
              <li className="nav-item">Home</li>
              <li className="nav-item">Menu</li>
              <li className="nav-item">Service</li>
              <li className="nav-item">Shop</li>
            </ul>
            <div className="search-container">
              <img src={images.searchIcon} alt="" />
              <input type="text" placeholder="Search" />
              <img src={images.shoppingBagIcon} alt="" />
              <span>2</span>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
}

export default App;
