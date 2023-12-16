import React, { useState, useRef } from "react";
import "./App.css";
import HamburgerComponent from "./assets/scripts/hamburger.jsx";
import * as images from "./image-paths.js";

function App() {
  const [count, setCount] = useState(0);
  const navigatorMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);

  return (
    <>
      <HamburgerComponent navigatorMenuRef={navigatorMenuRef} hamburgerBtnRef={hamburgerBtnRef} />
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
        <section className="hero-section">
          <div className="hero-content">
            <div className="more-than-faster">
              <p className="more-than-faster-title">More than Faster</p>
              <img className="more-than-faster-image" src={images.strawberry} alt="strawberry" />
            </div>
            <h1 className="hero-content-title">
              <span>Groceries</span>
              <span>delivered in as</span>
              <div className="content-title-container">
                <span>little as</span>
                <span> 2 hours</span>
              </div>

            </h1>
            <p className="hero-content-description">
              <span>Grocen atssures fresh grocery every morning to your</span>
              <span>family without getting out in this pandemic.</span>
            </p>
             <div className="hero-content-buttons">
              <button>Order Now</button>
              <div className="hero-order-process">
                <img src={images.buttonPlay} alt="play"/>
                <span>Order Process</span>
              </div>
             </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-card">
              <img className="orange-image" src={images.orange} alt="oranges" />
              <div className="card-info">
                <div className="card-info-title">
                  <p>Fresh Orange</p>
                  <div className="rectangle"></div>
                </div>
                <div className="card-info-price">
                  <h2>$44.60</h2>
                  <p>Free Shipping</p>
                </div>
              </div>
              <img className="shopping-image" src={images.shoppingIcon} alt="" />
            </div>

            <img src={images.chef1} alt="Chef with vegetables" />
            
            <div className="hero-image-delivary">
              <img src={images.alarmClockIcon} alt="clock" />
              <div className="delivary-title">
                <h3>Delivary</h3>
                <p>30 Min</p>
              </div>
              <img className="pointer" src={images.arrow} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
