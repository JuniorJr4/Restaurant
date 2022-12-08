function createContact() {
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper");

  const contactInfo = document.createElement("p");
  contactInfo.innerHTML =
    "Bobbies' Place<br><br>30 Avenue des Champs-Elysées<br><br>Paris<br><br>07123456789<br><br>Bobbie@bobbiebbq.com";

  contactWrapper.appendChild(contactInfo);

  return contactWrapper;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.appendChild(createContact());
}

export default loadContact;
