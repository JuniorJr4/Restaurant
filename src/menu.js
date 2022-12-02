function createMenuCard(item, pic) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const dish = document.createElement("h3");
  dish.textContent = item;
  cardContainer.appendChild(dish);

  const dishImage = document.createElement("img");
  dishImage.src = pic;
  cardContainer.appendChild(dishImage)
  return cardContainer;
}

function createMenu() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");
  menuWrapper.appendChild(createMenuCard("Pork Ribs", "../src/ribs.jpg"));
  menuWrapper.appendChild(createMenuCard("Brisket", "../src/brisket.jpg"));
  menuWrapper.appendChild(createMenuCard("Hot Links", "../src/hotlinks.jpg"));
  menuWrapper.appendChild(createMenuCard("Smoked Chicken", "../src/chicken.jpg"));

  return menuWrapper;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.appendChild(createMenu());
}
export default loadMenu;
