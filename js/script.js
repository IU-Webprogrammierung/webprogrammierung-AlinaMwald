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

/* JavaScript for back to top button */

async function loadComponent(selector, path) {
  const response = await fetch(path);
  const html = await response.text();

  const element = document.querySelector(selector);
  element.innerHTML = html;

  if (selector === "header") { // Call setActiveNavLink after the header is loaded
    setActiveNavLink();
  }

  if (selector === "footer") {
    initBackToTop();
  }
}

function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top"); 

  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) { // Show the button after scrolling down 500px
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
}
