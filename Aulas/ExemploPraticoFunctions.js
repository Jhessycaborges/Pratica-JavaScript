// Exercício - Calcular o IMC

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2) // peso : altura ao quadrado
}

const paciente = 'Jhessyca';
const peso = 72;
const altura = 1.74;

const IMC = calcularIMC(peso, altura);
console.log(IMC.toFixed(2))

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Peso normal');
} else if (IMC >= 25 && IMC <= 30) {
    console.log('Acima do peso');
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade morbida');
}