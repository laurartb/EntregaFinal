
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll("header nav a").forEach(a=>{
  a.addEventListener("click", ()=> nav.classList.remove("is-open"));
});

document.documentElement.style.scrollBehavior = "smooth";