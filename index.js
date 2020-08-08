/*
Algoritmo N°1 – Parcial Alumnos.
    El usuario ingresa la nota de 30 alumnos.
    La salida de el promedio y la cantidad de 
    alumnos que superaron el promedio.


*/
let notas=[];
let ingreso, promedio ;
let alumnos = 0;
let suma = 0;
let notamayor=0;
    for ( i = 0;i <= 29; i++) {
        ingreso = parseInt(prompt("Ingresa tu nota N°: " +i));
        notas[i] = ingreso;
        alumnos = alumnos + 1
        suma = notas[i] + suma
}
promedio = suma/alumnos
     for(i=0 ; i<=29; i++){
        if (notas[i]>promedio){
        notamayor = notamayor + 1
 }
} 
alert(`El promedio fue de ${promedio} y los alumnos que superaron el promedio son ${notamayor}`);