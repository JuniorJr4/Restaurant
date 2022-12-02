import loadContact from "./contact";
import loadHomePage from "./home";
import loadMenu from "./menu";

function removeActive() {
  const allActive = document.querySelectorAll(".active");

  allActive.forEach((el) => {
    el.classList.remove("active");
  });
}

function buildNav() {
  const main = document.querySelector(".main");

  const navWrapper = document.createElement("div");
  navWrapper.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    main.textContent = "";
    removeActive();
    e.target.classList.add("active");
    loadHomePage();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    main.textContent = "";
    removeActive();
    e.target.classList.add("active");
    loadContact();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener('click', (e) => {
    main.textContent = "";
    removeActive();
    e.target.classList.add("active");
    loadMenu();
  });

  navWrapper.appendChild(homeBtn);
  navWrapper.appendChild(menuBtn);
  navWrapper.appendChild(contactBtn);

  return navWrapper;
}

function loadNav() {
  const content = document.getElementById("content");
  content.appendChild(buildNav());
}

export default loadNav;
