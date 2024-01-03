/*
import React, { useEffect, useRef } from "react";

function HamburgerComponent({ navigatorMenuRef, hamburgerBtnRef }) {
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
  }, [navigatorMenuRef, hamburgerBtnRef]);

  return null;
}

export default HamburgerComponent;
*/
