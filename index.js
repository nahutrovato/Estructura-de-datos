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

/*
Algoritmo N° 2 Palindromo:
    El algoritmo verifica si la palabra ingresada
    (menos a 10 caracteres) es un palindromo o no.

*/
let palabra;
let verificacion = ""
palabra = prompt(`Ingrese la palabra de menos de diez caracteres`).toLowerCase();
if(palabra.length<10){

     for (i=palabra.length-1;i>=0;i--){
    verificacion = verificacion + palabra[i]
}
    if(palabra===verificacion){
    alert(`${palabra} es un palindromo`);
    }else{
    alert(`${palabra} no es un palindromo`);
}

}else{
alert(`Ingreso mas de un caracter`);

/*
Algoritmo N° 3 números decrecientes:
    Se ingresan 20 numeros en orden aleatorio
    se ordenan de forma decreciente con el 
    algoritmo de burbuja.

*/
let num = [];
let aux;
    for (i=0;i<=19;i++){
        num[i] = parseInt(prompt("Ingrese numeros"))
}
    for(i=0;i<=19;i++){
        for(j=0;j<=19;j++){
            if(num[i]>num[j]){
                aux = num[i]
                num[i]=num[j]
                num[j] = aux

 }
 }
 }
alert(`El orden decreciente es: ${num}`);
