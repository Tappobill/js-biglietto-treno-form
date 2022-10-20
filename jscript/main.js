function recuperoDati() {
    let inputKm = document.getElementById("inputKm");
    let inputEta = document.getElementById("inputEta");
    let km = parseInt(inputKm.value);
    let eta = parseInt(inputEta.value);
    let ticketvalue = km * 0.21;
    console.log(km)

    if (eta < 18) {
        ticketvalue=ticketvalue - (ticketvalue * 0.20)
        console.log(ticketvalue)
    }
    else if(eta > 65) {
        ticketvalue=ticketvalue - (ticketvalue * 0.40)
        console.log(ticketvalue)
    }

    
    document.getElementById("boxvalue").innerHTML = `Il prezzo del biglietto è: ${ticketvalue}`
}