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



//COLECCIÓN

function fetchAllClothing() {
    const pHombre = $.ajax({ url: "https://fakestoreapi.com/products/category/men's%20clothing" });
    const pMujer = $.ajax({ url: "https://fakestoreapi.com/products/category/women's%20clothing" });

    $("#info").html("<p>Cargando productos...</p>");
    $("#contenedor").empty();

    $.when(pHombre, pMujer).done(function(resHombre, resMujer) {
        $("#info").empty();
        const todaLaRopa = resHombre[0].concat(resMujer[0]);

        $.each(todaLaRopa, function(i, producto) {
            // Creamos el elemento como un objeto jQuery para poder asignarle el evento click fácilmente
            const card = $(`
                <div class="product-card">
                    <div class="img-wrapper">
                        <img src="${producto.image}" alt="${producto.title}">
                    </div>
                    <div class="product-info">
                        <span class="product-price">${producto.price} €</span>
                        <p class="product-title">${producto.title}</p>
                    </div>
                </div>
            `);

            // Al hacer clic en la tarjeta, llamamos a openModal pasando el objeto del producto
            card.click(function() {
                openModal(producto);
            });

            $("#contenedor").append(card);
        });
    }).fail(function() {
        $("#info").html("<p>Error al cargar los productos de la API</p>");
    });
}

function openModal(producto) {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";

    // Asignamos los datos de la API de ropa al modal
    modal.querySelector("img").src = producto.image;
    modal.querySelector("figcaption").innerHTML = `<h4>${producto.title}</h4>`;
    modal.querySelector(".tituloAPI").innerText = producto.title;
    
    // Rellenamos los campos específicos de la FakeStoreAPI
    modal.querySelector(".precioAPI").innerHTML = `${producto.price} €`;
    modal.querySelector(".categoriaAPI").innerHTML = `${producto.category}`;
    modal.querySelector(".descripcionAPI").innerHTML = `${producto.description}`;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal si se hace clic fuera del contenido blanco
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
};

$(document).ready(function() {
    fetchAllClothing();
});