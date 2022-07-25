function ej1(){
let edad = Number(prompt("Ingresa tu edad"));
let alt = Number(prompt("ingresa tu altura, (ej:1.85)"));
if (edad >= 18 && alt >= 1.85) {
    alert("Estas apto para jugar Básquet profesional");
}
else {
    alert("No estas en condiciones de jugar profesionalmente");
}}

function ej2(){
let n1 = Number(prompt("Ingresa primer numero"));
let n2 = Number(prompt("Ingresa segundo numero"));
let n3 = Number(prompt("Ingresa tercer numero"));
let prom = (n1 + n2 + n3) / 3;
alert("el promedio es: " + prom);}

function ej3(){
    let n1 = Number(prompt("Ingresa primer numero"));
    let n2 = Number(prompt("Ingresa segundo numero"));
    let n3 = Number(prompt("Ingresa tercer numero"));
if (n1>n2 && n1>n3){
document.write('El mayor numero es '+ n1);
}
else{
     if(n2>n3){
        document.write('El mayor numero es '+ n2);}
    else{
        document.write('El mayor numero es '+ n3);}
}}

function ej4(){
    let i=0;
    let suma=0;
    let resta=0;
    while(i<5){
        let n = Number(prompt("Ingresa un numero"));
    if(n>0){    
        suma = suma+n;
        resta=resta-n;
        i=i+1;
    }
    else{
        result = confirm("Has ingresado un numero negativo. vuelva a ingresar otro numero")
            if (result == false) {

                break;

            }
}
}
document.write('la suma de los 5 primeros numeros positivos es: '+suma+'<br>');

document.write('la resta de los 5 primeros numeros positivos es: '+resta);
}

function ej5(){
let i=1;
let acum = 0;
while(i>0){
    const n = Number(prompt('ingrese un numero: (el bucle finaliza al ingresar cero)'));
    if(n===0){break;}
    acum = acum + n;
    i = i + 1 ; }  
    
document.write('El acumulado de los numeros es: '+acum);
}


function ej6(){
let nom = prompt("Ingresa tu nombre:");
let alt = Number(prompt("Ingresa tu altura:"));
let peso = Number(prompt("Ingresa tu peso en kg:"));
function imcc(peso , alt) {
    return (peso/Math.pow(alt,2));
}
let imc = imcc(peso, alt);
document.write(`${nom} Tu indice de masa corporal es: ${imc}`);
if (imc < 18.5) {
    alert(nom + " Tu IMC indica un peso bajo")
}
else {
    if (imc >= 18.5 && imc < 25) {
        alert("Tu IMC indica un peso normal")
    }
    else {
        if (imc >= 25 && imc < 30) {
            alert("Tu IMC indica que tienes sobrepeso")
        }
        else {
            alert("Tu IMC indica que estas obeso")
        }
    }
}
}