function createFooter() {
    const footer = document.createElement("footer");
    const date = new Date();
    const year = date.getFullYear();
    footer.textContent = `Clint G, The Odin Project, ${year}`;
  
    return footer;
  }
  
  function loadFooter() {
    const content = document.getElementById("content");
    content.appendChild(createFooter());
  }

 export default loadFooter;  