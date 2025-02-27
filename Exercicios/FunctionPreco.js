// 1 - Dinheiro ou Pix: 15% de desconto
// 2 - Debito: 10% de desconto
// 3 - Cartao 2x: preco normal (sem juros)
// 4 - Cartao 3x ou mais: 10% de juros

function aplicarDesconto(preco, desconto) {
    return preco - (preco * desconto);
}

function aplicarJuros(preco, juros) {
    return preco + (preco * juros);
}

const preco = 379;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(preco - (preco * 0.15));
} else if (formaDePagamento === 2) {
    console.log(preco - (preco * 0.10));
} else if (formaDePagamento === 3) {
    console.log(preco);
} else {
    console.log(preco + (preco * 0.10));
}

