function notas(){

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
}

