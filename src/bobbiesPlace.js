import loadHomePage from "./home";
import loadNav from "./nav";
import loadFooter from "./footer";

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  return main;
}
function renderSite() {
  const content = document.getElementById("content");
  content.appendChild(createMain());
  loadNav();
  loadHomePage();
  loadFooter();
}
export default renderSite;
