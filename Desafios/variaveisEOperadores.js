// Desafio
// Criando um programa para calcular o valor gasto de uma viagem

// O programa conta com 3 variáveis. Sendo elas:
// 1- Preço da gasolina
// 2- Gasto médio do combustível em KM
// 3- Distancia em KM da viagem

const precoCombustivel = 6.79;
const kmPorLitro = 10;
const distanciaEmKM = 202;

const litrosConsumidos = distanciaEmKM / kmPorLitro
const valorGasto = litrosConsumidos * precoCombustivel

console.log(valorGasto.toFixed(2))  
// .toFixed para arredondar o valor no console(terminal)