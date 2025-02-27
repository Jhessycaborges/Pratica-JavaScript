// 1 - Dinheiro ou Pix: 15% de desconto
// 2 - Debito: 10% de desconto
// 3 - Cartao 2x: preco normal (sem juros)
// 4 - Cartao 3x ou mais: 10% de juros

function valorProduto(preco, formaDePagamento) {
    if (formaDePagamento === 'Dinheiro ou Pix') {
        return preco - (preco * 0.15);
    } else if (formaDePagamento === 'Debito') {
        return preco - (preco * 0.10);
    } else if (formaDePagamento === 'Cartao 2x') {
        return preco;
    } else (formaDePagamento === 'Cartao 3x ou mais'); {
        return preco + (preco * 0.10);
    }
}

const preco = 379;
const formaDePagamento = 'Cartao 3x ou mais';
console.log(valorProduto(preco, formaDePagamento));