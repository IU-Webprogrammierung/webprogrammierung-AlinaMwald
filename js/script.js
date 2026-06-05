/* JavaScript for loading header and footer components */
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");

async function loadComponent(selector, path) {
  const response = await fetch(path);
  const html = await response.text();

  const element = document.querySelector(selector);
  element.innerHTML = html;

  if (selector === "header") {
    setActiveNavLink();
  }
}

/* JavaScript for setting active navigation link */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() + window.location.hash;

  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

/* JavaScript for responsive navigation menu */
function myFunction() {
  const navbar = document.getElementById("topNavbar");
  if (!navbar) return;
  navbar.classList.toggle("responsive");
}
