
function ej1() {
    let nombre = "Programación" + " Fácil.";
    let saludo = "Les doy la bienvenida a ";
    let fraseCompleta = saludo + nombre;
    let nueva = "Mucha suerte"
    console.log(fraseCompleta, nueva);
}

//-------------------------------------------------------------------//

function ej2() {
    let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
    console.log(frase);
}

//-------------------------------------------------------------------//

function ej3() {
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";
    let espacio = " ";
    let num1 = "(diez) ";
    let num2 = "(veinte) ";
    let num3 = "(treinta) ";
    let concatenaNumeros = numeroString1 + espacio + num1 + numeroString2 + espacio + num2 + numeroString3 + espacio + num3;
    console.log(concatenaNumeros);
}

//--------------------------------------------------------------------//

function ej4() {
    var age = prompt("Cuál es tu edad:?");
    var nom = prompt("Cuál es tu nombre:?");
    console.warn("NOMBRE:", nom);
    console.warn("EDAD:", age);
}

//--------------------------------------------------------------------//

function ej5() {
    let genero = prompt("Cual es tu genero? (M/F)")

    if (genero == "F" || genero == "f") {
        let edad = prompt("Introduce tu edad");
        if (edad >= 20) {
            alert("Puedes entrar, eres mujer y eres mayor de 20.");
        }
        else {
            alert("No puedes entrar, eres menor de edad.");
        }
    }
    else {
        if (genero === "M" || genero === "m") {
            let edad = prompt("Introduce tu edad");
            if (edad >= 18) {
                alert("Puedes entrar, eres hombre y eres mayor de 18.");
            }
            else {
                alert("No puedes entrar, eres menor de edad.");
            }
        }
        else {
            result = confirm("No has ingresado una opción valida. Desea volver a intentarlo?")
            if (result == true) {

                location.reload();

            }
            else { alert("Adios") }
        }
    }
}