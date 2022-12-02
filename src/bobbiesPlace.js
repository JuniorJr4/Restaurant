import loadHomePage from "./home";
import loadNav from "./nav";
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
}
export default renderSite;
