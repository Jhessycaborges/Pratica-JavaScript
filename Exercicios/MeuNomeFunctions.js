//com parâmetro
function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function VerificadorDeIdade(idade) {
    if (idade > 18) {
        console.log(escrevaMeuNome('Jhessyca') + ' e sou maior de idade');
    } else {
        console.log(escrevaMeuNome('Jhessyca') + ' e sou menor de Idade');
    }
}

VerificadorDeIdade(); //acrescentar o parametro para verificar a
