function calculateArea() {
  var side = document.getElementById("side").value;
  var area = side * side;
  document.getElementById("A").innerHTML = area; // TODO: add more text and the unit
}

function calculateUmfang() {
  var side = document.getElementById("side").value;
  var umfang = 4 * side;
  document.getElementById("u").innerHTML = umfang; // TODO: add more text and the unit
}

function calculateDiagonal() {
  var side = document.getElementById("side").value;
  var diagonal = Math.sqrt(2) * side;
  document.getElementById("diagonal").innerHTML = diagonal; // TODO: add more text and the unit
}

function calculate() {
  calculateArea();
  calculateUmfang();
  calculateDiagonal();
}
