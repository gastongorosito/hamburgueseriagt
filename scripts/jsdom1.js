let productos = [
    {
      id: 1,
      nombre: "LOCO LUCA",
      precio: 2850,
      foto: "imagenes/loco.png",
      categoria: "Hamburguesa",
      descripcion: "Trpile Cheese",
    },
    {
      id: 2,
      nombre: "GORDO SANTI",
      precio: 2500,
      foto: "imagenes/bido.png",
      categoria: "Hamburguesa",
      descripcion: "Doble carne y verduras",
    },
    {
      id: 3,
      nombre: "FDX",
      precio: 2650,
      foto: "imagenes/fdx.png",
      categoria: "Hamburguesa",
      descripcion: "Cebolla morada con queso danbo",
    },
    {
      id: 4,
      nombre: "NAHITAN",
      precio: 2350,
      foto: "imagenes/nahitan.png",
      categoria: "Hamburguesa",
      descripcion: "Cebolla caramelizada, mostaza y cheddar",
    },
    {
      id: 5,
      nombre: "TANITO",
      precio: 2400,
      foto: "imagenes/tanito.png",
      categoria: "Hamburguesa",
      descripcion: "Lechuga, tomate y cebolla",
    },
    {
      id: 6,
      nombre: "MONITO",
      precio: 2750,
      foto: "imagenes/monito.png",
      categoria: "Hamburguesa",
      descripcion: "Queso roquefort con cebolla",
    },
    
  ];

  let carrito = [];
const moneda = "$";
const Ditems = document.querySelector("#items");
const Dcarrito = document.querySelector("#carrito");
const Dtotal = document.querySelector("#total");
const Dbotoneliminar = document.querySelector("#boton-eliminar");
const DbotonPagar = document.querySelector("#boton-pagar");
const localStorage = window.localStorage;


const Billetera = 5000
const Dfondos = document.querySelector("#fondos");
let fondos = document.createElement("p");
fondos.innerHTML = Billetera;

Dfondos.appendChild(fondos);

function crearProductos() {
  productos.forEach((info) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12");

    const itemBody = document.createElement("div");
    itemBody.classList.add("card-body");

    const categoria = document.createElement("span");
    categoria.classList.add("badge", "bg-secondary", "mb-3");
    categoria.textContent = info.categoria;

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title", "mt-2");
    titulo.textContent = info.nombre;

    const descripcion = document.createElement ("p")
    descripcion.classList.add("card-text")
    descripcion.textContent = info.descripcion

    const foto = document.createElement("img");
    foto.classList.add("img-fluid");
    foto.setAttribute("src", info.foto);

    const precio = document.createElement("p");
    precio.classList.add("card-text");
    precio.textContent = `${moneda}${info.precio}`;

    const botonCarrito = document.createElement("button");
    botonCarrito.classList.add("btn", "btn-primary");
    botonCarrito.textContent = "Comprar";
    botonCarrito.setAttribute("marcador", info.id);
    botonCarrito.addEventListener("click", sumarProducto);

    itemBody.appendChild(categoria);
    itemBody.appendChild(foto);
    itemBody.appendChild(titulo);
    itemBody.appendChild(precio);
    itemBody.appendChild(botonCarrito);
    itemBox.appendChild(itemBody);
    Ditems.appendChild(itemBox);
    itemBox.appendChild(descripcion)
  });
}

function sumarProducto(evento) {
  carrito.push(evento.target.getAttribute("marcador"));
  actualizarCarrito();
  guardarCarrito();
}

function actualizarCarrito() {
  Dcarrito.textContent = "";
  const sinDuplicados = [...new Set(carrito)];
  sinDuplicados.forEach((item) => {
    const miItem = productos.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? (total += 1) : total;
    }, 0);
    const itemBox = document.createElement("li");
    itemBox.classList.add("list-group-item", "text-right", "mx-2");
    itemBox.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${moneda}${miItem[0].precio}`;

    const botonBorrar = document.createElement("button");
    botonBorrar.classList.add("btn", "btn-danger", "mx-5");
    botonBorrar.textContent = "X";
    botonBorrar.style.marginLeft = "1rem";
    botonBorrar.dataset.item = item;
    botonBorrar.addEventListener("click", borrarItemCarrito);

    itemBox.appendChild(botonBorrar);
    Dcarrito.appendChild(itemBox);
  });

  Dtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    actualizarCarrito();
    guardarCarrito();
}

function calcularTotal(){
    return carrito
    .reduce((total, item) =>{
        const miItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0);
}

function eliminarCarrito(){
    carrito = [];
    actualizarCarrito();
    localStorage.clear();
}

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    if (localStorage.getItem("carrito") !== null){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }
}


DbotonPagar.onclick = () => {
  if (Billetera >= carrito) {
    Swal.fire(
      '¡A disfrutar!',
      'Dentro de unos minutos te avisaremos cuando el pedido este en camino.',
      'success'
    )

    nuevaCompra.appendChild(contenedor);
  } else {
    Swal.fire(
      'No tenes fondos suficientes para disfrutar de la hamburguesa',
      'Revisa tu saldo y volvé a intentar.',
      'error'
    )

  nuevaCompra.appendChild(contenedor);
  }
}

Dbotoneliminar.addEventListener("click", eliminarCarrito);

actualizarCarrito();
crearProductos();
cargarCarrito();
