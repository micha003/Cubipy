function calculateVolumen() {
    var radius = document.getElementById("radius").value;

    var volumen = (4/3) * Math.PI * radius ^ 3;
    document.getElementById("volumen").value = "Volumen " + String(volumen) +  "cm³";
}

function calculateSurface() {
    var radius = document.getElementById("radius").value;

    var OA = 4 * Math.PI * radius ^ 2;
    document.getElementById("OA").value = "Oberflächeninhalt " + String(OA) + "cm²";
}

function calculate() {
    calculateVolumen();
    calculateSurface();
}