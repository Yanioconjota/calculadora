
const sumar = require('./sumar.js');
const restar = require('./restar.js');
const multiplicar = require('./multiplicar.js');
const dividir = require('./dividir.js');

let resultado;

resultado = sumar(134, 43);
console.log('El resultado de la suma es: ' + resultado);
resultado = restar(5, 1);
console.log('El resultado de la resta es: ' + resultado);
resultado = multiplicar(44, 434);
console.log(resultado);
resultado = dividir(2, 0);
console.log(resultado);