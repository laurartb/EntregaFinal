//MENU
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll("header nav a").forEach(a=>{
  a.addEventListener("click", ()=> nav.classList.remove("is-open"));
});

document.documentElement.style.scrollBehavior = "smooth";

const btnCarrito = document.getElementById("btnCarrito");
const carrito = document.getElementById("carrito");
const btnCerrarCarrito = document.getElementById("btnCerrarCarrito");
const carritoOverlay = document.getElementById("carritoOverlay");

// Añadir listeners solo si existen y proteger el uso de classList
btnCarrito?.addEventListener("click", () => {
  if (carrito) carrito.classList.add("abierto");
  if (carritoOverlay) carritoOverlay.classList.add("activo");
});

btnCerrarCarrito?.addEventListener("click", () => {
  if (carrito) carrito.classList.remove("abierto");
  if (carritoOverlay) carritoOverlay.classList.remove("activo");
});

carritoOverlay?.addEventListener("click", () => {
  if (carrito) carrito.classList.remove("abierto");
  if (carritoOverlay) carritoOverlay.classList.remove("activo");
});