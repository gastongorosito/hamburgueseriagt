let productos = [];
let carrito = [];
let dinero = 11500;
let fondosDiv = document.querySelector("#fondos");
fondosDiv.innerHTML = `
<p> Fondos: $${dinero}`;
let total = 0;

const mostrarProductos = async () => {
  const respuesta = await fetch('/products.json');
  productos = await respuesta.json();

  const productosDiv = document.querySelector("#items");
  productosDiv.innerHTML = "";

  productos.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12");
    productoDiv.innerHTML = `
        <span class="badge bg-secondary mb-3 mt-3">${producto.categoria}</span>
        <h4 class="card-title">${producto.nombre}</h4>
        <img class="img-fluid" src="${producto.foto}" alt="${producto.nombre}" />
        <h5 class="card-text mt-2">$${producto.precio}</h5>
        <button class="btn btn-primary mt-2 mb-4" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
        <h6 class="card-text mt-2">${producto.descripcion}</h6>
      `;
    productosDiv.appendChild(productoDiv);
  });
};

const agregarAlCarrito = (nombre) => {
  const producto = productos.find((p) => p.nombre === nombre);
  carrito.push(producto);
  mostrarCarrito();
};

const mostrarCarrito = () => {
  const carritoDiv = document.querySelector("#carrito");
  carritoDiv.innerHTML = "";

  let total = 0;
  const productosEnCarrito = {};
  carrito.forEach((producto) => {
    if (!productosEnCarrito[producto.nombre]) {
      productosEnCarrito[producto.nombre] = producto;
      productosEnCarrito[producto.nombre].cantidad = 1;
    } else {
      productosEnCarrito[producto.nombre].cantidad++;
    }
  });

  Object.values(productosEnCarrito).forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.innerHTML = `
      <h6>${producto.nombre}</h6>
      <p>Cantidad: ${producto.cantidad}</p>
      <p>$${producto.precio}</p>
      <button class="btn btn-danger mb-2" onclick="eliminarDelCarrito('${producto.nombre}')">X</button>
    `;
    total += producto.precio * producto.cantidad;
    carritoDiv.appendChild(productoDiv);
  });

  carritoDiv.innerHTML += `
    <p>Total: $${total}</p>
    <button class="btn btn-danger" onclick="vaciarCarrito()">Vaciar carrito</button>
    <button class="btn btn-success"onclick="pagar()">Pagar</button>
`;
};

const pagar = () => {
  const total = calcularTotal();
  if (total <= dinero) {
    Swal.fire(
      "¡A disfrutar!",
      "Dentro de unos minutos te avisaremos cuando el pedido este en camino.",
      "success"
    );
  } else {
    Swal.fire(
      "No tenes fondos suficientes para disfrutar de la hamburguesa",
      "Revisa tu saldo y volvé a intentar.",
      "error"
    );
  }
};

const calcularTotal = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  return total;
};

const eliminarDelCarrito = (nombre) => {
  carrito = carrito.filter((producto) => producto.nombre !== nombre);
  mostrarCarrito();
};

const vaciarCarrito = () => {
  carrito = [];
  mostrarCarrito();
};

mostrarProductos();
