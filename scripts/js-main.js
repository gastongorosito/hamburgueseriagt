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
    alert("Elegiste Hamburguesa Bido, debes abonar $2.500");
    break;
  case "2":
    alert("Elegiste Hamburguesa FDX, debes abonar $1.169 .");
    break;
  case "3":
    alert("Elegiste Hamburguesa El Loco Luca, debes abonar $2.222.");
    break;
  default:
    alert("No elegiste ninguna de las opciones anteriores.");
    break;
}