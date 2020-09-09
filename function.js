const mostrarFunction = () => {
    document.querySelector('#ejerciciosArray').style.display = 'block';
}

/*
//Ejercicio function factorial:
let numero = Number(prompt(`Ingrese un numero para factoriar`));
let factorial = 1;
const numeroFactorial= (numero)=>{
    for(i=1;i<=numero;i++){
        factorial=factorial*i
     }
    return factorial
}
console.log(`El factorial de ${numero} es`, numeroFactorial(numero));

//Ejercicio funcion potencia:

let numeroBase = Number(prompt(`Ingrese un numero para calcular`));
let numeroExponente = parseInt(prompt(`Ingrese un numero entero`))
const calcularPotencia = (base, exponente) => Math.pow(base, exponente);

console.log(`${numeroBase} elevado a ${numeroExponente} es: `, calcularPotencia(numeroBase, numeroExponente));


//Ejercico funcion potencia sin metodo:
let numeroBase2 = Number(prompt(`Ingrese un numero para calcular`));
let numeroExponente2 = parseInt(prompt(`Ingrese un numero entero`))
const calcularPotencia2=(base,exponente)=>{
    for(let i=1;i<exponente;i++){
        numeroBase2=numeroBase2*base
    }
    return numeroBase2
}
console.log(`${numeroBase2} elevado a ${numeroExponente2} es: `, calcularPotencia2(numeroBase2, numeroExponente2));