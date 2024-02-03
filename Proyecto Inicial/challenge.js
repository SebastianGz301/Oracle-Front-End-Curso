// Desafíos:
// Crear una función que muestre "¡Hola, mundo!" en la consola.
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.


// function mensaje(){
//     console.log("Hola tartariano");
//     return;
// }

// mensaje();

// function getName(name){
//     console.log(`Hola ${name} Bienvenido a tartaria`);
//     return;
// }

// getName("Mickey Mouse Emperico");


// function getNumber(){
//     let number = parseInt(prompt("Ingrese numero"));
//     resultado = number*2;
//     console.log(`El doble de su numero es ${resultado}`);
//     return;
// }

// getNumber();


// function getAverage(num1, num2 ,num3){
//     return num1+num2+num3/3;
// }

// let promedio = getAverage(30, 20, 100);
// console.log(promedio);



// function Mayor(number_1, number_2){
//     return number_1 > number_2 ? number_1 : number_2;   
// }


// let numeroMayor = Mayor(2, 20);
// console.log(numeroMayor);

// function multiplicar(numberMultiplicar){
//     return numberMultiplicar*numberMultiplicar;
// }

// let numeroDeMultiplicar = multiplicar(5);
// console.log(numeroDeMultiplicar);



//Desafíos:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura 
//en metros y peso en kilogramos, que se recibirán como parámetros.

function imc(altura, peso) {
    return peso/Math.pow(altura, 2);//math.pow se utiliza para elevar al cuadrado, esta necesita de (base , exponente)
    // return peso / (altura*altura);
}

let resultadoImc = imc(1.8, 70)
console.log(`Resultado IMC de una hombre que mide 180cm y peso 70kg es de ${resultadoImc}`);


// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numeropasado){
    return numeropasado*4*3*2*1;
}
let factor= factorial(5);
console.log(`El factorial de 5 es ${factor}`);


// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
//equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.

function equivalenteDolares(valor){
    return valor * 3900;
}

let valorDolares = 25;
let convertidorPesos = equivalenteDolares(valorDolares);
console.log(`${valorDolares} Dolares son ${convertidorPesos} Colombianos`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaRectangulo(base, altura){
    return base*altura;
}

function perimetroRectangulo(base, altura) {
    return 2*(base+altura);
}

let resultadoArea = areaRectangulo(6,4);
console.log(`El area del rectangulo de 6cm de base y 4cm de altura es ${resultadoArea}`);

let resultadoPerimetro = perimetroRectangulo(6,4);
console.log(`El perimetro del rectangulo de 6cm de base y 4cm de altura es ${resultadoPerimetro}`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaCircular(pi, r2){
    return pi*Math.pow(r2, 2);
}

function perimetroCircular(piempirico ,diametro) {
    return piempirico*diametro;
}

let areaCircularResultado = areaCircular(3.1416, 9);
console.log(`El area del circulo teniendo en cuenta que su diametro es de 18cm es de ${areaCircularResultado}cm2`)


let perimetroCircularResultado = perimetroCircular(3.1416, 18);
console.log(`El perimetro del circulo teniendo en cuenta que su diametro es de 18cm es de ${perimetroCircularResultado}cm`)

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numeroTabla) {
    for (var i = 1; i<=10; i++){
        var resultadoxd = numeroTabla * i;
        console.log(numeroTabla + "x" + i + "=" + resultadoxd)
    }
}

let numeroTabla = 5;
tablaMultiplicar(numeroTabla);



// function tablaMultiplicar(numero) {
//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }

// // Llamada de ejemplo con el número 5
// tablaMultiplicar(5);




//Desafios Arrays(Listas)
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
//siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguagesDeProgramacion)

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
console.log(lenguagesDeProgramacion);


//Crea una función que muestre en la consola todos los elementos de 
//la lista "lenguagesDeProgramacion.
lenguagesDeProgramacion.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});


    function mostrarLenguagesSeparadamente() {
        for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
        }
    }
    
    mostrarLenguagesSeparadamente();




//Crea una función que muestre en la consola todos los elementos de la lista 
//"lenguagesDeProgramacion en orden inverso.

// let reversed = lenguagesDeProgramacion.reverse();
// console.log(reversed);


    function mostrarLenguagesReversoSeparadamente() {
        for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
        }
    }
    
    mostrarLenguagesReversoSeparadamente();


//Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularMedia(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20 , 30 ,40 ,50 ,60];
let media = calcularMedia(numeros);
console.log(`Media de numeros es ${media}`);

//Crea una función que muestre en la consola el número más grande y 
//el número más pequeño en una lista.





    function encontrarMayorMenor(lista) {
        let mayor = lista[0];
        let menor = lista[0];
    
        for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        }
    
        console.log('Mayor:', mayor);
        console.log('Menor:', menor);
    }
    
    let numerosxd = [15, 8, 25, 5, 12];
    encontrarMayorMenor(numerosxd);




    function encontraxd(list){
        let mayorGZ = list[0];
        let menorGZ = list[0];

        for(let i = 1; i < list.length; i++ ){
        if(list[i] > mayorGZ){
            mayorGZ = list[i];
        }
        if(list[i] < menorGZ){
            menorGZ = list[i];
        }
    }

    console.log('Mayor:', mayorGZ);
    console.log('Menor:', menorGZ);


    }

let numbersxd = [100, 10000 ,100000 ,2 ,1];
encontraxd(numbersxd);




//Crea una función que devuelva la suma de todos los elementos en una lista.
    function calcularSuma(lista) {
        let suma = 0;
        for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
        }
        return suma;
    }
    
    let numeros2 = [15, 8, 25, 5, 12];
    let suma = calcularSuma(numeros2);
    console.log('Suma:', suma);


    //Crea una función que reciba una lista como parámetro y retorne el índice de un 
    //elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
        function encontrarIndiceElemento(lista, elemento) {
            for (let i = 0; i < lista.length; i++) {
            if (lista[i] === elemento) {
                return i; // Retorna el índice del elemento encontrado
            }
            }
            return -1; // Retorna -1 si el elemento no se encuentra en la lista
        }





//Crea una función que reciba dos listas de números del mismo tamaño y
//devuelva una nueva lista con la suma de los elementos uno a uno.


        let listaUno = [13, 15, 17, 19]
        let listaDos = [16, 18, 20, 22]
        
        function sumarlistas(listaUno, listaDos) {
            if(listaUno.length != listaDos.length) {
                console.log("Las listas no tienen la misma cantidad de elementos")
                return null;
            } 
            let nuevaLista = [];
            for (let i = 0; i < listaUno.length; i++) {
                nuevaLista.push(listaUno[i] + listaDos[i]);
            }
            
            return nuevaLista;	
        }
        
        let resultado = sumarlistas(listaUno, listaDos);
        
        console.log(`La lista nueva se mostraria asi : ${resultado}`)
        


        //Crea una función que reciba una lista de números y devuelva una nueva lista con el
        // cuadrado de cada número.


        let listaDeNumeros = [33, 22, 44, 11]

        function listaDeCuadrados(lista) {
            let nuevaLista = [];
            for (let i = 0; i < lista.length; i++) {
                nuevaLista.push(lista[i]*lista[i]);
            }
            
            return nuevaLista;	
        }
        
        let resultadoxdd = listaDeCuadrados(listaDeNumeros);
        
        console.log(`La lista nueva se mostraria asi : ${resultadoxdd}`)
        