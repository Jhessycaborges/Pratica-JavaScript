// Fórmula do IMC:
// IMC = peso / (altura * altura)

//Elabore um algoritmo que, dado o peso e a altura de um adulto,
// mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos. Condição:
// Abaixo de 18.5 = Abaixo do peso;
// Entre 18.5 e 25 = Peso normal;
// Entre 25 e 30 = Acima do peso;
// Entre 30 e 40 = Obesidade;
// Acima de 40 = Obesidade morbida;

const paciente = 'Jhessyca';
const peso = 73;
const altura = 1.74;

const IMC = peso / (altura * altura);

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