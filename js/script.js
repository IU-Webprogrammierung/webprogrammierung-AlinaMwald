// JavaScript for loading header and footer components
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");

async function loadComponent(selector, path) {
  const response = await fetch(path); 
  const html = await response.text(); // nur html Teil geben, also nur Text und dann in HTML speichern
  const element = document.querySelector(selector);
  element.innerHTML = html;
}

// JavaScript for responsive navigation menu
function myFunction() {
  const navbar = document.getElementById("topNavbar");
  if (!navbar) return;
  navbar.classList.toggle("responsive");
}
