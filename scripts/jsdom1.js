let productos = [
    {
      categoria: "Hamburguesa",
      foto: "loco",
      nombre: "loco luca",
      precio: 1850,
      producto: 1,
    },
    {
      categoria: "Hamburguesa",
      foto: "bido",
      nombre: "gordo santi",
      precio: 1500,
      producto: 2,
    },
    {
      categoria: "Hamburguesa",
      foto: "fdx",
      nombre: "fdx",
      precio: 2500,
      producto: 3,
    },
  ];
  
  let listaProductos = document.querySelector(".contenedor-productos");
  
  for (let a of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
  <div class=" contenedor-producto col-lg-12">
    <span class="badge bg-primary mt-2 mb-4">${a.categoria}</span>
  <div class="d-flex justify-content-center"><img src="imagenes/${a.foto}.png" alt="" class="img-fluid"></img></div>
  <div class="contenedor-producto card-body">
    <h5 class="card-title mt-3">${a.nombre}</h5>
    <h6 class="mb-3">${a.precio}</h6>
    <button type="button" class="btn btn-primary boton-compra${a.producto}">COMPRAR</button>
  </div>
    </div>`;
  
    listaProductos.appendChild(contenedor);
  }
  
 
  