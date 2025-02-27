// Exercício - Calcular o IMC

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2); // peso : altura ao quadrado
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 25) {
        return 'Peso normal';
    } else if (IMC >= 25 && IMC <= 30) {
        return 'Acima do peso';
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Obesidade';
    } else {
        return 'Obesidade morbida';
    }
}

const paciente = 'Jhessyca';
const peso = 72;
const altura = 1.74;

const IMC = calcularIMC(peso, altura);
console.log(classificarIMC(IMC));