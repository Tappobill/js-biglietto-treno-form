function recuperoDati() {
    let inputKm = document.getElementById("inputKm");
    let inputEta = document.getElementById("inputEta");
    let inputName = document.getElementById("inputName");    

    let km = parseInt(inputKm.value);
    let eta = parseInt(inputEta.value);
    let name = inputName.value;
    let ticketvalue = km * 0.21;
  
    let random = getRandomInt(1, 10)
    let random2 = getRandomInt(10000, 99999)

    if (eta === 2) {
        ticketvalue = ticketvalue - (ticketvalue * 0.20)
        console.log(ticketvalue)
    }
    else if (eta === 3) {
        ticketvalue = ticketvalue - (ticketvalue * 0.40)
        console.log(ticketvalue)
    }

    decimals = ticketvalue.toFixed(2)
    document.getElementById("boxvalue").innerHTML = `${decimals}&euro; `
    
    document.getElementById("carrozza").innerHTML = random;
    document.getElementById("codicecp").innerHTML = random2;
    document.getElementById("nomePass").innerHTML = name;

    let bigl = document.getElementById("biglietto");
    bigl.classList.remove("d-none");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function annullaDati() {
    let bigl = document.getElementById("biglietto");
    bigl.classList.add("d-none");

    document.getElementById("inputKm").value = "";
    document.getElementById("inputEta").value = "";
    document.getElementById("inputName").value = "";

    document.getElementById("boxvalue").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codicecp").innerHTML = "";
    document.getElementById("nomePass").innerHTML = "";


}


