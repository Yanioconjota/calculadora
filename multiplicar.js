function multiplicar(num1,num2){
    if(num1 === 0 || num2 === 0){
        resultado = 'Todo número multiplicado por 0 da 0';
    }
    resultado = 'El resultado de la multiplicación es: ' +  (num1 * num2);
    return resultado;
}

module.exports = multiplicar;