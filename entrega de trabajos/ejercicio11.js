function ej1(){
let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
    case "lunes":
        alert("Salir a caminar");
        break;
    case "martes":
        alert("Andar en bici");
        break;
    case "miercoles":
        alert("Descanso");
        break;
    case "jueves":
        alert("Ir al Gimnasio");
        break;
    case "viernes":
        alert("Salir a correr");
        break;
    case "sabado":
        alert("Descanso");
        break;
    case "domingo":
        alert("Permitido.");
        break;
    default:
        alert("Escribe el día de la semana en minúsculas.");
}}

function ej2(){
for (i = 20; i <= 70; i++) {
    document.write("El número es: " + i + "<br>");
}
}



function ej3(){
let count = 0;
let cantidad = Number(prompt("Ingresar la cantidad de repeticiones"));
while (count < cantidad) {
    document.write("Hola Mundo <br>");
    count = count + 1
}}