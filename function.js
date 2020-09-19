const mostrarFunction = () => {
    document.querySelector('#').style.display = 'block';
    alert(`Pagina en desarrollo`);
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
*/



/*


//Escribir una función que permita deducir si una fecha ingresada (en la forma dd/mm ej.:23/9) es válida (que exista, que no sea 31 de noviembre o 30 de febrero o 45 de enero)

const mesesDelAño = [31,29,31,30,31,30,31,31,30,31,30,31];
let ingresoDia = Number(prompt(`Ingrese un dia`));
let ingresoMes = Number(prompt(`Ingrese un mes`));


const validacionFecha = (dia, mes) => dia>mesesDelAño[mes-1] || dia<=0 ? alert(`Fecha incorrecta`) : alert(`Fecha correcta`);
validacionFecha(ingresoDia, ingresoMes);



//Escribir una función booleana "Digito" que determine si un carácter es uno de los dígitos 0 al 9.

let ingresoDigito = Number(prompt(`Ingrese un digito`));
const Digito = (digito) => alert(digito>=0 && digito<=9); 
Digito(ingresoDigito);


//realizar un algoritmo con una funcion que calcule el area de un circulo (pasando el radio por parametro y devolviendo el area para se mostrada DESDE EL CODIGO PRINCIPAL)

let ingresoRadio = Number(prompt(`Ingrese el radio del circulo`));
const calculaAreaDeCirculo = (radio) =>  2*Math.PI*radio;
alert(calculaAreaDeCirculo(ingresoRadio));


//realizar un algoritmo en el que se ingresen varias fracciones (en la forma numerador/denominador) las guarde en un array (pueden definir la cantidad de fracciones maxims que deseen a la hora de hacer el algoritmo) y tenga una funcion que las simplifique, dividiendo numerador y denominador por el maximo comun multiplo y las muestre (ej si la fraccion ingresada es 9/6 debe mostrar 3/2)
*/
