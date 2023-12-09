// hamburger.jsx

import React, { useEffect, useRef } from "react";

function HamburgerComponent() {
  const navigatorMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);
  const isOnMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleHamburgerClick = () => {
      navigatorMenuRef.current.classList.toggle("active");
      console.log("activated");
    };

    if (isOnMobile && navigatorMenuRef.current && hamburgerBtnRef.current) {
      hamburgerBtnRef.current.addEventListener("click", handleHamburgerClick);
    }

    return () => {
      if (hamburgerBtnRef.current) {
        hamburgerBtnRef.current.removeEventListener("click", handleHamburgerClick);
      }
    };
  }, [isOnMobile]);

  return null;
}

export default HamburgerComponent;



/*
document.addEventListener("DOMContentLoaded", function () {
    
});
*/



  /*hamburgerBtn.style.cursor = "pointer";*/