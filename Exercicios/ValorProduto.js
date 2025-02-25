//Algoritmo que calcule o valor pago de um produto
//Código condição de pagamento
// A vista no dinheiro ou pix: 15% de desconto
// A vista do Débito: 10% de desconto
// Em duas vezes: preco normal (Sem Juros)
// Acima de duas vezes: 10% de juros

// Formas de pagamento
const formaDePag1 = 'Dinheiro ou Pix';
const formaDePag2 = 'Débito';
const formaDePag3 = '2x';
const formaDePag4 = '3x ou mais';

// Descontos e Juros
const desconto1 = 0.15;
const desconto2 = 0.10;
const desconto3 = 0;
const desconto4 = 0.10;

// Preço do produto
const precoProduto = 379;

let formaDePag = ' ';

if (formaDePag === formaDePag1) {
    console.log(precoProduto - desconto1);
} else if (formaDePag === formaDePag2) {
    console.log(precoProduto - desconto2);
} else if (formaDePag === formaDePag3) {
    console.log(precoProduto - desconto3);
} else {
    console.log(precoProduto * desconto4);
}
