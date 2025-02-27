// 1 - Dinheiro ou Pix: 15% de desconto
// 2 - Debito: 10% de desconto
// 3 - Cartao 2x: preco normal (sem juros)
// 4 - Cartao 3x ou mais: 10% de juros

function calcularPrecoFinal(preco, formaDePagamento) {
    const desconto1 = 0.15;
    const desconto2 = 0.10;
    const desconto3 = 0;
    const juros = 0.10;

    if (formaDePagamento === 1) {
        return preco - (preco * desconto1);
    } else if (formaDePagamento === 2) {
        return preco - (preco * desconto2);
    } else if (formaDePagamento === 3) {
        return preco;
    } else {
        return preco + (preco * juros);
    }
}

function main() {
    const preco = 379;
    const formaDePagamento = 4;
    const precoFinal = calcularPrecoFinal(preco, formaDePagamento);
    console.log(`O preço final é R$ ${precoFinal.toFixed(2)}`);
}

main();