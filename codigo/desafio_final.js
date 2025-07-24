//desafio 5
let rangoUsuario = 0;
let numeroSecreto = 0;
let numeroDeUsuario = 0;
let intentos = 1;
let cantidadIntentos = 0;
let maximosIntentos = 3;

alert("Bienvenidos al juego de adivinanza")
rangoUsuario = parseInt(prompt("Elije un rango de números, desde 1 a ?"))
numeroSecreto = Math.floor(Math.random() * rangoUsuario)+1;
console.log(numeroSecreto)

cantidadIntentos = parseInt(prompt("Dependiendo de tú rango elije cuantas posibilidades quieres tener"))
maximosIntentos = cantidadIntentos

while (numeroDeUsuario != numeroSecreto) {;
    numeroDeUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${rangoUsuario} por favor`));
    console.log(numeroDeUsuario)
    /*
    Esta condicion realiza la comparación
    entre el número ingresado y el número secreto
    */
    if (numeroSecreto == numeroDeUsuario){
       // alert("Acertaste el número, felicidades lo hiciste en " + intentos == 1 ? "vez" : "veces" )
        alert(`Acertaste el número, felicidades lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`) 
       console.log("Felicitaciones")
    } else{
        if (numeroDeUsuario < numeroSecreto){
            alert("el numero secreto es mayor")
        }else {
            alert("el numero secreto el menor")
        }
        // incrementamos el valor mientras no acierta
        //alert("Lo siento, no acertaste el número secreto. Intentalo de nuevo")
         
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++
        //palabraIntento = "intentos"
        if (intentos > maximosIntentos){
            alert("Game Over")
            console.log("Llegaste al número máximo de " + maximosIntentos + " intentos")
            break;
        }
    };
};