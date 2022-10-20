function recuperoDati() {
    let inputKm = document.getElementById("inputKm");
    let inputEta = document.getElementById("inputEta");
    console.log(inputEta)
    let km = parseInt(inputKm.value);
    let eta = parseInt(inputEta.value);
    let ticketvalue = km * 0.21;
    console.log(km)

    if (eta === 2) {
        ticketvalue = ticketvalue - (ticketvalue * 0.20)
        console.log(ticketvalue)
    }
    else if (eta === 3) {
        ticketvalue = ticketvalue - (ticketvalue * 0.40)
        console.log(ticketvalue)
    }

    decimals = ticketvalue.toFixed(2)
    document.getElementById("boxvalue").innerHTML = `Il prezzo del biglietto è: ${decimals}`
}

