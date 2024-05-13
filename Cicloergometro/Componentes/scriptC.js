document.getElementById("mostrarBtn").addEventListener("click", function () {
  mostrarTabla();
  document.getElementById("miVentana").style.display = "block";
});

document
  .getElementsByClassName("cerrar")[0]
  .addEventListener("click", function () {
    document.getElementById("miVentana").style.display = "none";
  });

function mostrarTabla() {
  var datos = [
    { posicion: 1, cantidad: 1, descripcion: "Tubo de soporte, delantero" },
    { posicion: 2, cantidad: 1, descripcion: "Tubo de soporte, trasero" },
    { posicion: 3, cantidad: 4, descripcion: "Tapón de plástico, azul" },
    { posicion: 4, cantidad: 2, descripcion: "Rueda de transporte" },
    { posicion: 5, cantidad: 6, descripcion: "Tuerca de bloqueo M8" },
    { posicion: 6, cantidad: 2, descripcion: "Tornillo MVBF M8x16 mm" },
    { posicion: 7, cantidad: 1, descripcion: "Cuña expansora M10" },
    { posicion: 8, cantidad: 1, descripcion: "Cadena 1/2 x 1/8”, 116 l" },
    { posicion: 9, cantidad: 1, descripcion: "Protector de cadena" },
    { posicion: 10, cantidad: 1, descripcion: "Protector lateral" },
    {
      posicion: 11,
      cantidad: 2,
      descripcion: "Tornillo de montaje LKT-TT 5x6.5mm",
    },
    { posicion: 12, cantidad: 1, descripcion: "Cubierta de rueda" },
    { posicion: 13, cantidad: 2, descripcion: "Tornillo M5x25 mm" },
    { posicion: 14, cantidad: 1, descripcion: "Soporte para guardabarros" },
    { posicion: 15, cantidad: 1, descripcion: "Cubierta para sillín" },
    { posicion: 16, cantidad: 1, descripcion: "Cubierta para marco" },
    { posicion: 17, cantidad: 1, descripcion: "Pedal (par)" },
    { posicion: 18, cantidad: 1, descripcion: "Correa de pedal (par)" },
    { posicion: 19, cantidad: 1, descripcion: "Sillín" },
    { posicion: 20, cantidad: 1, descripcion: "Abrazadera de asiento" },
    { posicion: 21, cantidad: 1, descripcion: "Poste de sillín" },
    {
      posicion: 22,
      cantidad: 1,
      descripcion: "Casquillo para poste de sillín",
    },
    { posicion: 23, cantidad: 1, descripcion: "Pomo de bloqueo, completo" },
    { posicion: 24, cantidad: 1, descripcion: "Manillar, completo" },
    { posicion: 25, cantidad: 1, descripcion: "Tornillo" },
    { posicion: 26, cantidad: 1, descripcion: "Empuñadura, azul (par)" },
    {
      posicion: 27,
      cantidad: 1,
      descripcion: "Juego de bielas de acero, completo con imanes",
    },
    { posicion: 28, cantidad: 1, descripcion: "Cojinete del cartucho BB" },
    { posicion: 29, cantidad: 2, descripcion: "Tornillo M6S 8.8 M8 x 20 FZB" },
    { posicion: 30, cantidad: 2, descripcion: "Cubierta antipolvo" },
    { posicion: 31, cantidad: 1, descripcion: "Marco" },
    {
      posicion: 32,
      cantidad: 1,
      descripcion: "Volante de inercia 20 kg, completo",
    },
    {
      posicion: 33,
      cantidad: 1,
      descripcion: "Suspensión de rueda, juego completo",
    },
    { posicion: 34, cantidad: 1, descripcion: "Tensor de cadena" },
    { posicion: 35, cantidad: 1, descripcion: "Piñón" },
    { posicion: 36, cantidad: 1, descripcion: "Conexión" },
    { posicion: 37, cantidad: 3, descripcion: "Rodamiento 6001-2z" },
    { posicion: 38, cantidad: 1, descripcion: "Eje" },
    { posicion: 39, cantidad: 1, descripcion: "Casquillo, 23 mm" },
    {
      posicion: 40,
      cantidad: 2,
      descripcion: "Soporte para protector de cadena",
    },
    { posicion: 41, cantidad: 4, descripcion: "Taco de goma" },
    { posicion: 42, cantidad: 1, descripcion: "Soporte para sensor" },
    { posicion: 43, cantidad: 1, descripcion: "Sensor con cable" },
    { posicion: 44, cantidad: 1, descripcion: "Peso de calibración, 4 kg" },
  ];

  var tabla = document.getElementById("tablaPiezas");

  // Limpiar tabla
  tabla.innerHTML = "";

  // Crear filas de la tabla
  datos.forEach(function (dato) {
    var fila = document.createElement("tr");
    fila.innerHTML =
      "<td>" +
      dato.posicion +
      "</td><td>" +
      dato.cantidad +
      "</td><td>" +
      dato.descripcion +
      "</td>";
    tabla.appendChild(fila);
  });
}
