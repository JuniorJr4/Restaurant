import loadContact from "./contact"

function buildNav() {
  const navWrapper = document.createElement("div");
  navWrapper.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn");
  homeBtn.textContent = "Home";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', (e) => {
    loadContact();
  })

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn");
  menuBtn.textContact = "Menu";

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
