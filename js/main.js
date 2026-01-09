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

//CHART
const ctx = document.getElementById('fashelaChart');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Vestidos', 'Tops', 'Pantalones', 'Joyas', 'Accesorios'],
      datasets: [{
        label: 'Popularidad',
        data: [28, 22, 19, 15, 10],
        backgroundColor: [
          '#000000cc',
          '#222222cc',
          '#444444cc',
          '#666666cc',
          '#888888cc'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#000' },
          grid: { color: '#e0e0e0' }
        },
        x: {
          ticks: { color: '#000' },
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#000',
          titleColor: '#fff',
          bodyColor: '#fff'
        }
      }
    }
  });
}