function buildHomePage() {
  const main = document.createElement("div");
  main.classList.add("main");

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");
  main.appendChild(titleWrapper);

  const bbq = document.createElement('img');
  bbq.src = '../src/bbq.jpg';
  bbq.classList.add('bbq-img');
  main.appendChild(bbq);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Bobbies' Place";

  titleWrapper.appendChild(title);

  const mainInfo = document.createElement("p");
  mainInfo.classList.add("main-info");
  mainInfo.textContent =
    "Ici, à Bobbies' Place, vous découvrirez le meilleur barbecue à l'américaine de France.";

  main.appendChild(mainInfo);
  return main;
}

function loadHomePage() {
  const content = document.getElementById("content");
  content.appendChild(buildHomePage());
}

export default loadHomePage;
