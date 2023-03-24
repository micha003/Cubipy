// Dreiecksrechner

function calculateArea() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById("A").innerHTML = area; // TODO: add more text and the unit
}

function calculateUmfang() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var umfang = a + b + c;
  document.getElementById("u").innerHTML = umfang; // TODO: add more text and the unit
}

function calculateHoehe() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  var hoehe = (2 * area) / a;
  document.getElementById("h").innerHTML = hoehe; // TODO: add more text and the unit
}

function calculate() {
  calculateArea();
  calculateUmfang();
  calculateHoehe();
}
