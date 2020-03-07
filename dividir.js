function dividir(num1,num2){
    if(num1 === 0){
        resultado = 'El resultado es 0';
    } if(num2 === 0){
        resultado = 'Error en la división';
    } else {
        resultado = 'El resultado de la división es: ' +  (num1 / num2);
    }
    
    return resultado;
}

module.exports = dividir;