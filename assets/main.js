var genera = document.getElementById("genera");
genera.addEventListener("click", function () {
    var nome = document.getElementById("nome_utente").value;
    var km = document.getElementById("kms").value;
    var age = document.getElementById("anni").value;
    console.log(age);


    //mostra nome passeggero
    var msg_1 = document.getElementById("utente");
    msg_1.innerHTML = nome;

    //mostra sconto applicato
    if (age == "under") {
        var price_under = Math.round(((price - ((price / 100) * 20))) * 100) / 100.0;
        console.log(price_under);
        var msg_2 = document.getElementById("sconto");
        msg_2.innerHTML = "Sconto minorenni";
    } else if (age == "over") {
        var price_over = Math.round(((price - ((price / 100) * 40))) * 100) / 100.0;
        
        var msg_3 = document.getElementById("sconto");
        msg_3.innerHTML = "Sconto over 65";
    } else {
        console.log(price);
        var msg_7 = document.getElementById("sconto");
        msg_7.innerHTML = "Nessuno sconto applicabile";
    }

    //genera numero carrozza
    function randomCoach(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var msg_4 = document.getElementById("coach_num");
    msg_4.innerHTML = randomCoach (1, 10);

    //genera codice CP random
    function randomCP(min, max) {
        min = Math.ceil(90000);
        max = Math.floor(100000);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var msg_5 = document.getElementById("codeCP");
    msg_5.innerHTML = randomCP (90000, 100000);

    //il prezzo è definito in base ai km (0.21€/km)
    var price = km * 0.21;
    var msg_6 = document.getElementById("prezzo");
    msg_6.innerHTML = price + " €";


});

//annulla
var annulla = document.getElementById("annulla");
annulla.addEventListener("click", clear);

function clear() {
    document.getElementById("nome_utente").value = "";
    document.getElementById("kms").value = "";
    document.getElementById("anni").value = "under";
    document.getElementById("utente").innerHTML = "";
    document.getElementById("sconto").innerHTML = "";
    document.getElementById("coach_num").innerHTML = "";
    document.getElementById("codeCP").innerHTML = "";
    document.getElementById("prezzo").innerHTML = "";
}
