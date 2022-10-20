let inputKm = document.getElementById("inputKm");
let inputEta = document.getElementById("inputEta");

document.getElementById("title").innerHTML = `<h1>CALCOLA IL PREZZO DEL TUO BIGLIETTO</h1>`

function recuperoDati() {
    let km = parseInt(inputKm.value);
    console.log(km)
}