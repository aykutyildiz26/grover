import  { useState} from "react";
import Header from "./components/navbar/header.jsx";
import * as images from "./image-paths.js";
import "./App.css";
import Hero from "./components/heroSection/hero.jsx";
import Services from "./components/servicesSection/services.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <>
      <main>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <Services />   
      </main>
    </>
  );
}

export default App;
