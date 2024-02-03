
let numeroSecreto = 0;
let attemps = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

    function asingarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(attemps)
    if(numeroDeUsuario === numeroSecreto){
        asingarTextoElemento("p",`Tal cual hermano! tu intento empirico fue ${attemps} ${(attemps ===1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //el usuario no acerto

        if(numeroDeUsuario > numeroSecreto){
            asingarTextoElemento("p",`El toroide electromagnetico frecuencial pertenece a una dimension menor`)
        }else{
            asingarTextoElemento("p","El toroide electromagnetico frencuencial pertenece a una dimension mayor")
        }
        attemps++;
        limpiarBarra();
    }
    return;
}

function limpiarBarra() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asingarTextoElemento(`p`,`Ya se sortearon todos los numeros posibles`);
    }else{

//si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asingarTextoElemento("h1", "Toroide Electromagnetico Frecuencial");
    asingarTextoElemento("p", `Ingrese numero del 1 a el ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    attemps = 1;    
}


function restartGame(){
    //LimpiarBarra
    limpiarBarra();
    //indicar mensaje de invervalo de numeros
    //generar el numero aleatorio
    //Start number of atttemps
    condicionesIniciales();
    //disabled restart button
    document.querySelector("#reiniciar").setAttribute("disabled", "true");


}

condicionesIniciales();