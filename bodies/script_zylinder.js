function calculateVolumen() {
  var radius = document.getElementById("radius").value;
  var height = document.getElementById("height").value;
  var volumen = Math.round(Math.PI * radius * radius * height);
  document.getElementById("volumen").innerHTML = "Volumen: " + volumen + " cm³";
}

function calculateOA() {
  var radius = document.getElementById("radius").value;
  var height = document.getElementById("height").value;
  var oa = 2 * Math.PI * radius * height;
  document.getElementById("OA").innerHTML = "Oberfläche: " + oa + " cm²";
}

function calculate() {
  calculateVolumen();
  calculateOA();
}
