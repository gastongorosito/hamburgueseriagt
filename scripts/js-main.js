function mostrarMensaje() {
    console.log("¡Bienvenido a la Hamburgueseria GT!");
}
  
  mostrarMensaje();
  
  let nombre = "Gastón";
  
  console.log();


  function saludar(nombre, apellido) {
    console.log(`Saludos ${nombre} ${apellido}`);
   }
  
   saludar("Usuario", "Nuevo");

let Hamburguesa = prompt(`¿Que Hamburguesa te gustaria comprar?:
1: Hamburguesa Bido
2: Hamburguesa FDX
3: Hamburguesa El loco luca
`);

switch (Hamburguesa) {
  case "1":
    alert("Elegiste Hamburguesa Bido, debes abonar $2500");
    break;
  case "2":
    alert("Elegiste Hamburguesa FDX, debes abonar $1170 .");
    break;
  case "3":
    alert("Elegiste Hamburguesa El Loco Luca, debes abonar $2200.");
    break;
  default:
    alert("No elegiste ninguna de las opciones anteriores.");
    break;
}

//Turnos para pedido
for (let i = 1; i <= 5; i++) {
  let ingresarNombre = prompt("Ingresar nombre");
  alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);}

//precio pagando con tarjeta
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = precio;
      this.sumaTarjeta = function () {
        console.log((this.precio = this.precio * 1.15))
      }
  }
}
const productos = [];
productos.push(new Producto("Hamburguesa Bido", "2500"));
productos.push(new Producto("Hamburguesa FDX", "1170"));
productos.push(new Producto("Hamburguesa El Loco Luca", "2200"));

for (const producto of productos)
  producto.sumaTarjeta();