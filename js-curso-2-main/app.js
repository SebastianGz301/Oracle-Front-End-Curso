let title = document.querySelector("h1");
title.innerHTML = "EKISDE";


function ClickConsole() {
    alert("El boton fue cliclado");
}

function ClickPrompt() {
    let ciudad = prompt("Nombre una ciudad de brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti...`)
}


function ClickAlert(){
    alert("Yo amo JS");
}


function ClickSuma(){
    let num1 = parseInt(prompt("Ingrese numero 1"));
    let num2 = parseInt(prompt("Ingrese numero 2"));
    let suma = num1 + num2;
    alert(`El resultado es ${suma}`);
}