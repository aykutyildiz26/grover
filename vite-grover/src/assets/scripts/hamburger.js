import "../css/hero-section.css"
const navigatorMenu = document.querySelector(".hero-navigator-menu");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const isOnMobile = window.innerWidth <= 768;

console.log(navigatorMenu,hamburgerBtn)


if (isOnMobile) {
  /*hamburgerBtn.style.cursor = "pointer";*/
  hamburgerBtn.addEventListener("click", function () {
    navigatorMenu.classList.toggle("active");
    console.log("activated")
  });
}

/*
document.addEventListener("DOMContentLoaded", function () {

  );
*/