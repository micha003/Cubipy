// Kreisrechner

function calculateArea() {
  var radius = document.getElementById("radius").value;
  var area = Math.PI * radius * radius;
  document.getElementById("A").innerHTML = area; // TODO: add more text and the unit
}

function calculateUmfang() {
  var radius = document.getElementById("radius").value;
  var umfang = 2 * Math.PI * radius;
  document.getElementById("u").innerHTML = umfang; // TODO: add more text and the unit
}

function calculate() {
  calculateArea();
  calculateUmfang();
}
