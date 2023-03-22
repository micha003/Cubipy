// Kreisrechner

function calculateArea() {
  var radius = document.getElementById("radius").value;
  var area = Math.PI * radius * radius;
  document.getElementById("A").innerHTML = area;
}

function calculateUmfang() {
  var radius = document.getElementById("radius").value;
  var umfang = 2 * Math.PI * radius;
  document.getElementById("u").innerHTML = umfang;
}

function calculate() {
  calculateArea();
  calculateUmfang();
}
