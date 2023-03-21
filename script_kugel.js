function calculateVolumen() {
  var radius = document.getElementById("radius").value;

  var volumen = Math.round((4 / 3) * Math.PI * radius ** 3);
  document.getElementById("volumen").innerHTML =
    "Volumen " + String(volumen) + "cm³";
}

function calculateSurface() {
  var radius = document.getElementById("radius").value;

  var OA = Math.round(4 * Math.PI * radius ** 2);
  document.getElementById("OA").innerHTML =
    "Oberflächeninhalt " + String(OA) + "cm²";
}

function calculate() {
  calculateVolumen();
  calculateSurface();
}
