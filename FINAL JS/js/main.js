
/* array objeto bruto */
let arrayObjetoBruto = [];

/* peticion a servidor */
fetch("productos.json").then(respuesta => respuesta.json()).then(objectos => {
  arrayObjetoBruto = objectos;
  cargarProductos(); //al finalizar peticion
})

/* array objeto procesado */
let arrayObjetoProcesado = [];

function cargarProductos() {
  /* Iteración de objetos brutos */
  arrayObjetoBruto.forEach(objeto => {
    /* Creación de objeto de la clase product */
    arrayObjetoProcesado.push(new product(objeto));
  });
  cargarcatalogo();//terminado de iterar se enpiza a armar el catalogo
}

function cargarcatalogo() {
  arrayObjetoProcesado.forEach(objeto => {
    let newArticle = document.createElement("article");
    newArticle.setAttribute("class", "card p-1 col-6 col-md-4 col-lg-3");
    newArticle.innerHTML = `
        <img class="imgProduct img-fluid" src="${objeto.image}" alt="${objeto.name}">
        <h3>${objeto.name}</h3>
        <p>
          <span class="precioOriginal">S/.${objeto.priceOriginal} ||</span>
          <span class="precioDescuento ">${objeto.priceDescuento}</span>
          <br><span class="precioFinal">${objeto.priceFinal}</span>
        </p>
        <button class=" btn btn-primary" data-producto-sku="${objeto.sku}">Agregar al carrito</button>
      `;
    document.querySelector("#catalogo").append(newArticle);
  })
}

