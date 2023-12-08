import { useState } from "react";
import "./App.css";
import "./assets/scripts/hamburger.js"
import * as images from "./image-paths.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <header className="hero-header">
          <nav className="hero-header-navigator">
            <div className="grover-logo hamburger">
              <img id="hamburger-btn" src={images.groverLogo} alt="Grover" />
              <h2>Grover</h2>
            </div>
            <ul className="hero-navigator-menu">
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
      <script src="./scripts/hamburger.js"></script>
    </>
  );
}

export default App;
