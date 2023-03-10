// Kegelrechner

function calculateVolumen() {
    var radius = document.getElementById("diameter").value / 2;
    var height = document.getElementById("height").value;

    var volumen = (Math.PI * radius * radius * height) / 3;
    document.getElementById("volumen").value = "Volumen: " + String(volumen) + " cm³";
}

function calculateSurface() {
    var mantellinie = document.getElementById("mantellinie").value;
    var radius = document.getElementById("diameter").value / 2;

    var OA = Math.PI * radius * (radius + mantellinie);
    document.getElementById("OA").value = "Oberfläche: " + String(OA) + " cm²";
}

function calculate() {
    calculateVolumen();
    calculateSurface();
}