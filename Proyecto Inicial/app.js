// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un n�mero por favor:");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert('Acertaste el n�mero');
// }
// let mensajeDeBienvenida = ('Bienvenido a la aplicación');
// alert(mensajeDeBienvenida);

// let nombre = ("Luna");
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// let mensajeDeError = ("error completa todos los campos");
// alert("Bienvenido xddd");
// alert(mensajeDeError)
// let nombre = prompt("Ingrese nombre");
// let edad = prompt("Ingrese edad");

// if (edad >= 18){
//     alert("Gta VI GOD");
// }

//variables
// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un n�mero por favor:");
// //Compara numeros entre el usuario y la variable
// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert(`Acertaste, el número es: ${numeroUsuario}`);
// }  else{
//     alert(`No es xd, el numero que elegiste es: ${numeroUsuario}`);
//     // alert("no ES XD,"+ numeroUsuario)
// } 


// let porcentajeDescuento = 0;

// if (cantidadMillas > 30000) {
//     porcentajeDescuento = 20;
// } else if (cantidadMillas > 5000) {
//     porcentajeDescuento = 10;
// } else {
//     porcentajeDescuento = 0;
// }


//PETICION: Pregunta al usuario qué día de la semana es. 
//Si la respuesta es "Sábado" o "Domingo", 
//muestra "¡Buen fin de semana!". De lo contrario, 
//muestra "¡Buena semana!".

// let diaUsuario = prompt("Que dia de la semana es?");

// if (diaUsuario == "Sabado"){
//     alert("Buen fin de semana");
// } else if(diaUsuario =="Domingo"){
//     alert("Buen fin de semana"); 
//     } else{
//         alert("buena semana");
//     }

//Opcion 2 (BETTER)

// let diaDeLaSemana = prompt('¿Qué día de la semana es?');
// if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
//     alert('¡Buen fin de semana!');
// } else {
//     alert('¡Buena semana!');
// }







//PETICION: Verifica si un número ingresado 
//por el usuario es positivo o negativo. 
//Muestra una alerta informativa.

// let numeroUser = prompt("Ingrese numero");

// if (numeroUser >= 0){
//     alert("numero positivo " + numeroUser);
// }else{
//     alert("su numero es negativo " + numeroUser)
// }


//PETICION; Crea un sistema de puntuación para un juego.
// Si la puntuación es mayor o igual a 100, muestra 
//"¡Felicidades, has ganado!". En caso contrario, muestra 
//"Intenta nuevamente para ganar.".


// let puntuación = prompt("Ingrese Puntuacion");

// if (puntuación >=100){
//     alert("win");
// }else{
//     alert("Loose");
// }


//PETICION: Crea un mensaje que informe al usuario
// sobre el saldo de su cuenta, utilizando un template 
//string para incluir el valor del saldo.

// let saldo = prompt("Ingrese saldo");
// alert(`Su saldo es: ${saldo} Dolares`);

//PETICION: Pide al usuario que ingrese su nombre mediante 
//un prompt. Luego, muestra una alerta de bienvenida 
//usando ese nombre.


// let user = prompt("Ingrese su nombre");
// alert("Bienvenido: "+ user);



//Variables
// let numeroSecreto = 4;
// let numeroUsuario = 0;
// let intentos = 1;
// let palabraVeces = 'vez';
// let maxAttempts = 10;

// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

//     console.log(numeroUsuario);
//     if (numeroUsuario == numeroSecreto) {
//         //Acertamos, fue verdadera la condición
//         alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
//     } else {
//         if (numeroUsuario > numeroSecreto) {
//             alert('El número secreto es menor');
//         } else {
//             alert('El número secreto es mayor');
//         }
//         //Incrementamos el contador cuando no acierta
//         intentos = intentos + 1;
//         palabraVeces = 'veces';
//        // if(intentos > maxAttempts){
//           //  alert("perdiste jijijia");
//        // }
//         //La condición no se cumplió
//         //alert('Lo siento, no acertaste el número');
//     }
// }


//Test 1

    // let contador = 1;

    // while (contador < 4) {
    // console.log('Ejecutando la iteración ' + contador);
    // contador = contador + 1;
    // }




    // let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
    // let soma = 0;
    // let contador = qtdNumeros;
    
    // while(contador > 0){
    //     let numero = parseInt(prompt('Digite el numero:'));
    //     soma += numero;
    //     contador--;
    // }
    // let promedio = soma / qtdNumeros;
    
    // console.log(promedio);


// //EXPLICACION BUCLE Supongamos que el contador vale 5 
// (porque el usuario eligió 5 números a ingresar), 
// el bucle se repetirá mientras 5 sea mayor que 0, 
// por eso en los bucles se debe agregar una instrucción que altere 
// el contador para terminar estos ciclos. En este caso usaremos un 
// decremento para que cada vez que se repita el proceso, 5 
// vaya valiendo 1 menos ( 5, 4, 3, 2, 1, 0). Cuando el 
// contador llegue a cero, la condición 0 > 0 se romperá y 
// terminará el ciclo.

// En el código solo sería agregar:

// contador--;

// Que es lo mismo que escribir:

// contador = contador - 1;


// Cuando utilizamos bucles con contadores, debemos asegurarnos de 
// que en algún momento alcancen la condición de parada del bucle. 
// En el código anterior, el contador no tiene su valor alterado, y 
// para resolver el bucle infinito, simplemente debes decrementarlo 
// en cada iteración, agregando la línea 'contador--' dentro del 
// bucle.


// Al decrementar el valor de la variable contador 
// en cada iteración, eventualmente será menor o igual a 0,
//  lo que detendrá la ejecución del bucle.


//PETICION: Crea un contador que comience en 1 y vaya hasta 10 
//usando un bucle 'while'. Muestra cada número.

// let contador = 1;

// while(contador <= 10){
//     console.log("ejecutando contador " + contador);
//     contador = contador +1;
// }


//PETICION: Crea un contador que comience en 10 y 
//vaya hasta 0 usando un bucle 'while'. Muestra cada número.


// let contador = 10;
// while(contador > -1 ){
//     console.log("Ejecutando contador inverso " + contador);
//     contador = contador -1;
// }

//PETICION: Crea un programa de cuenta progresiva. 
//Pide un número y cuenta desde 0 hasta ese número utilizando 
//un bucle 'while' en la consola del navegador.


// let numberUSER = prompt("Ingrese numero");
// let contador = 1;

// while(contador <=  numberUSER){
//     console.log("Contador xdd " + contador)
//     contador = contador +1;
// }

//ALTERNATIVA

// let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
// let contador = 0;

// while (contador <= numeroMaximo) {
// console.log(contador);
// contador++


//PETICION
//Crea un programa de cuenta regresiva. Pide un número y 
//cuenta desde 0 hasta ese número utilizando un bucle 'while' 
//en la consola del navegador.

// let numberUSER = prompt("Ingrese numero");


// while(numberUSER >= 0){
//     console.log("contador regresivo(modo grefg) " + numberUSER);
//     numberUSER--;
// }


//codigo 

  //  Variables
    let sizeNumero = parseInt(prompt("Ingresa el numero maximo del numero secreto"))
    let numeroSecreto = Math.floor(Math.random()*sizeNumero)+1;
    let numeroUsuario = 0;
    let intentos = 1;
    // let palabraVeces = 'vez';
    let maxAttempts = 5;
    //console.log(numeroSecreto);
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${sizeNumero} por favor:`));

        console.log(numeroUsuario);
        if (numeroUsuario == numeroSecreto) {
            //Acertamos, fue verdadera la condición
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos" }`);
    } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El número secreto es menor');
            } else {
                alert('El número secreto es mayor');
            }
            //Incrementamos el contador cuando no acierta
            // intentos = intentos + 1;
            // intentos += 1;
            intentos++; //(mas usada)

            // palabraVeces = 'veces';
            if(intentos > maxAttempts){
                alert(`perdiste solo tenias ${maxAttempts} el numero secreto era ${numeroSecreto} xddd`);
                break;
            }
            //La condición no se cumplió
            //alert('Lo siento, no acertaste el número');
        }
    }






//PETICION:Crea un programa que utilice console.log para 
//mostrar un mensaje de bienvenida.

// console.log("Bienvenido");



//PETICION:Crea una variable llamada "nombre" y asígnale 
//tu nombre. Luego, utiliza console.log para mostrar el 
//mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

// let nombre = prompt("Ingrese su nombre");

// console.log(`Hola ${nombre}`);
// alert(`Hola ${nombre}`);


//PETICION:
//Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

// let nombre = prompt("Ingrese su nombre");

// console.log(`Hola ${nombre}`);
// alert(`Hola ${nombre}`);



//PETICION:
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el 
//lenguaje de programación que más te gusta?. Luego, almacena 
//la respuesta en una variable y muestra la respuesta en la 
//consola del navegador.


// let question = prompt("Cual es el lenguaje de programacion que mas te gusta?");
// console.log(question);
// alert(question);


//PETICION
//Crea una variable llamada "valor1" y otra llamada "valor2", 
//asignándoles valores numéricos de tu elección. Luego, realiza 
//la suma de estos dos valores y almacena el resultado en una 
//tercera variable llamada "resultado". Utiliza console.log para
//mostrar el mensaje "La suma de [valor1] y [valor2] es igual a 
//[resultado]." en la consola.

// let valor1 = 6;
// let valor2 = 9;

// resultado = valor1 + valor2;
// console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultado}`);



//PETICION:Pide al usuario que ingrese su edad con prompt.
//Con base en la edad ingresada, utiliza un if para verificar 
//si la persona es mayor o menor de edad y muestra un mensaje 
//apropiado en la consola.



// let edad = prompt("Ingrese su edad");

// if(edad >= 18){
//     alert(`Tu edad es ${edad} por lo tanto eres mayor de edad`);
//     }else{
//         alert(`tienes ${edad} activa cam `);
//     }


//PETICION: Crea una variable "numero" y solicita un valor con prompt. 
//Luego, verifica si es positivo, negativo o cero utilizando un if-else y 
//muestra el mensaje correspondiente.

// let numero = prompt("Ingrese numero");


// if(numero > 0){
//     alert("Tu numero es positivo");
// }else{
//     if(numero < 0){
//     alert("Tu numero es Negativo");
//     }else{
//         alert("Tu numero es cero");
//     }
// }


//PETICION: Utiliza un bucle while para mostrar los números del 1 al 10 
//en la consola.

// let numberCount = 1;

// while(numberCount <= 10){
//     console.log(numberCount);
//     numberCount++;
// }


//PETICION: Crea una variable "nota" y asígnale un valor numérico. 
//Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra 
//"Aprobado" o "Reprobado" en la consola.



// let nota = prompt("Ingrese Nota");

// if(nota >= 7){
//     console.log(`Aprovado`);
// }else{
//     console.log(`Reprovado`);
// }




//PETICION: Utiliza Math.random para generar cualquier número 
//aleatorio y muestra ese número en la consola.

    // let randomNumber = Math.random();

    // console.log(randomNumber);


//PETICION: Utiliza Math.random para generar un número entero
//entre 1 y 10 y muestra ese número en la consola.

// let randomNumber = Math.floor(Math.random()*10)+1;

// console.log(randomNumber)


//PETICION: Utiliza Math.random para generar un número entero entre 
//1 y 1000 y muestra ese número en la consola.

// let randomNumber = Math.floor(Math.random()*1000)+1;

// console.log(randomNumber)

//ALTERNATIVA (NO SE USA MATHFLOOR) 

// let randomNumber = parseInt(Math.random()*1000)+1;

// console.log(randomNumber)