function calculateVolumen() {
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    var volumen = Math.PI * radius * radius * height;
    document.getElementById("volumen").value = "Volumen: " + volumen + " cm³";
}

function calculateOA() {
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    var oa = 2 * Math.PI * radius * height;
    document.getElementById("OA").value = "Oberfläche: " + oa + " cm²";
}