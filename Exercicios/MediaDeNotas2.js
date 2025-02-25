// Maneira mais simples de realizar o exercício

// 1) Faça um algoritmo que, dado as 3 notas tiradas por 
// um aluno em 1 semestre da faculdade, calcule e imprima a 
// sua media e a sua classificação conforme a tabela abaixo

/*
    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

// Notas do aluno
const nota1 = 5.9;
const nota2 = 8.4;
const nota3 = 6.7;

// Cálculo da média
const media = (nota1 + nota2 + nota3) / 3;
console.log('Media Final: ' + media)

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado')
}