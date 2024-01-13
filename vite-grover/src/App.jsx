import { useState } from "react";
import Header from "./components/navbar/header.jsx";
import * as images from "./image-paths.js";
import "./App.css";
import Hero from "./components/heroSection/hero.jsx";
import Services from "./components/servicesSection/services.jsx";
import Features1 from "./components/features1/features1.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <Services />
        <Features1 />
      </main>
    </>
  );
}

export default App;
