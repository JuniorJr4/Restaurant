import loadHomePage from "./home";
import loadNav from "./nav";
import loadFooter from "./footer";

function createMain() {
  const mainMain = document.createElement('div');
  mainMain.classList.add('main-main');

  const main = document.createElement('div');
  main.classList.add('main');

  mainMain.appendChild(main);

  return mainMain;
}
function renderSite() {
  const content = document.getElementById("content");
  content.appendChild(createMain());
  loadNav();
  loadHomePage();
  loadFooter();
}
export default renderSite;
