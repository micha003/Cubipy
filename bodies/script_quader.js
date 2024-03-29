function calculateVolumen() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var volumen = length * width * height;
  document.getElementById("volumen").innerHTML =
    "Volumen: " + String(volumen.toPrecision(3)) + " cm³";
}

function calculateSurface() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var OA = 2 * (length * width + length * height + width * height);
  document.getElementById("OA").innerHTML =
    "Oberfläche: " + String(OA.toPrecision(3)) + " cm²";
}

function calculateDiagonal() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var diagonal = Math.sqrt(length * length + width * width + height * height);
  document.getElementById("diagonal").innerHTML =
    "Diagonale: " + String(diagonal.toPrecision(3)) + " cm";
}

function calculate() {
  calculateVolumen();
  calculateSurface();
  calculateDiagonal();
}
