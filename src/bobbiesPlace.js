import loadHomePage from "./home";
import loadNav from "./nav";

function renderSite() {
  loadNav();
  loadHomePage();
}
export default renderSite;
