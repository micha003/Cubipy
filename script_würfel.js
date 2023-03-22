// Würfelrechner

function calculateVolumen() {
  var a = document.getElementById("a").value;
  var volumen = a * a * a;
  document.getElementById("volumen").innerHTML = volumen;
}

function calculateSurface() {
  var a = document.getElementById("a").value;
  var surface = 6 * a * a;
  document.getElementById("OA").innerHTML = surface;
}

function calculate() {
  calculateVolumen();
  calculateSurface();
}
