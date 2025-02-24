// Desafio de Estruturas de Variáveis
// Criando um programa para calcular o valor de uma viagem

// O programa conta com 5 variáveis. Sendo elas:
// 1- Preço do Etanol
// 2- Preço da Gasolina
// 3- O tipo de combustivel que está no seu carro
// 4- Gasto médio do combustível em KM
// 5- Distancia em KM da viagem

const precoEtanol = 4.80;
const precoGasolina = 6.53;
const tipoDeCombustivel = "Gasolina"; // meu carro utiliza gasolina
const consumoMedioKmPorLitro = 12; // o carro faz 12km por litro
const distanciaKm = 500; // distancia da viagem em km

//Cálculos
const litrosNecessarios = distanciaKm / consumoMedioKmPorLitro;

let custoTotal;

if (tipoDeCombustivel === 'Etanol') {
    custoTotal = litrosNecessarios * precoEtanol;
} else if (tipoDeCombustivel === 'Gasolina') {
    custoTotal = litrosNecessarios * precoGasolina;
} else {
    console.log("Tipo de combustível inválido. Escolher 'Etanol' ou 'Gasolina'");
}

console.log('O valor total da viagem será de R$' + custoTotal.toFixed(2));

