function calculateVolumen() {
  var radius = document.getElementById("radius").value;
  var height = document.getElementById("height").value;
  var volumen = Math.round(Math.PI * radius * radius * height);
  document.getElementById("volumen").innerHTML =
    "Volumen: " + volumen.toPrecision(3) + " cm³";
}

function calculateOA() {
  var radius = document.getElementById("radius").value;
  var height = document.getElementById("height").value;
  var oa = 2 * Math.PI * radius * height;
  document.getElementById("OA").innerHTML =
    "Oberfläche: " + oa.toPrecision(3) + " cm²";
}

function calculate() {
  calculateVolumen();
  calculateOA();
}
