// Würfelrechner

function calculateVolumen() {
  var a = document.getElementById("a").value;
  var volumen = a * a * a;
  document.getElementById("volumen").innerHTML =
    "Volumen: " + String(volumen.toPrecision(3)) + "cm³";
}

function calculateSurface() {
  var a = document.getElementById("a").value;
  var surface = 6 * a * a;
  document.getElementById("OA").innerHTML =
    "Oberfläche: " + String(surface.toPrecision(3)) + "cm²";
}

function calculateDiagonal() {
  var a = document.getElementById("a").value;
  var diagonal = Math.sqrt(3) * a;
  document.getElementById("diagonale").innerHTML =
    "Diagonale: " + String(diagonal.toPrecision(3)) + "cm";
}

function calculate() {
  calculateVolumen();
  calculateSurface();
  calculateDiagonal();
}
