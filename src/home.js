function buildHomePage() {
  // const body = document.querySelector("body");
  const main = document.querySelector(".main");
  main.classList.add("main");

  // const titleWrapper = document.createElement("div");
  // titleWrapper.classList.add("title-wrapper");
  // main.appendChild(titleWrapper);

  // const title = document.createElement("h2");
  // title.classList.add("title");
  // title.textContent = "Bobbies' Place";

  // titleWrapper.appendChild(title);

  const mainInfo = document.createElement("p");
  mainInfo.classList.add("main-info");
  mainInfo.textContent =
    "Ici, à Bobbies' Place, vous découvrirez le meilleur barbecue à l'américaine de France. Commandez nos viandes au kilo.";

  main.appendChild(mainInfo);

  const mainImage = document.createElement("img");
  mainImage.src = "/src/platter.jpg";
  mainImage.classList.add("main-image");
  main.appendChild(mainImage);

  return main;
}

function loadHomePage() {
  const mainMain = document.querySelector(".main-main");
  mainMain.appendChild(buildHomePage());
}

export default loadHomePage;
