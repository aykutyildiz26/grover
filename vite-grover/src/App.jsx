import { useState } from "react";
import Header from "./components/navbar/header.jsx";
import Hero from "./components/heroSection/hero.jsx";
import Services from "./components/servicesSection/services.jsx";
import Features1 from "./components/features1/features1.jsx";
import Features2 from "./components/features2/features2.jsx";
import CTA from "./components/ctaSection/cta.jsx";
import Footer from "./components/footer/footer.jsx";
import * as images from "./image-paths.js";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <Services />
        <Features1 />
        <Features2 />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
