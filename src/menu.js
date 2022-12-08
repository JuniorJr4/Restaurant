function createMenuCard(item, pic, cost) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const dish = document.createElement("h3");
  dish.textContent = item;
  cardContainer.appendChild(dish);

  const dishImage = document.createElement("img");
  dishImage.classList.add('dish-image');
  dishImage.src = pic;
  cardContainer.appendChild(dishImage)
  
  const price = document.createElement('h3');
  price.textContent = cost;
  cardContainer.appendChild(price);

  return cardContainer;
}

function createMenu() {
  const menuWrapper = document.createElement("div");
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Menu';
  menuTitle.classList.add('menu-title');
  menuWrapper.appendChild(menuTitle);
  menuWrapper.classList.add("menu-wrapper");
  menuWrapper.appendChild(createMenuCard("Pork Ribs", "../src/ribs.jpg", '22€/kg'));
  menuWrapper.appendChild(createMenuCard("Brisket", "../src/brisket.jpg", '20€/kg'));
  menuWrapper.appendChild(createMenuCard("Hot Links", "../src/hotlinks.jpg", '18€/kg'));
  menuWrapper.appendChild(createMenuCard("Smoked Chicken", "../src/chicken.jpg", '18€/kg'));

  return menuWrapper;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.appendChild(createMenu());
}
export default loadMenu;
