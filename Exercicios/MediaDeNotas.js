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

// Classificações
const ehMenorQue5 = 'Reprovado';
const entre5e7 = 'Recuperação';
const acimaDe7 = 'Aprovado';

// Notas do aluno
const nota1 = 5.9;
const nota2 = 8.4;
const nota3 = 6.7;
const mediaFinal = ' ';

const media = (nota1 + nota2 + nota3) / 3

let classificacao;

if (mediaFinal < 5) {
    console.log('O aluno está ' + ehMenorQue5)
} else if (mediaFinal <= 5 >= 7) {
    console.log('O aluno está ' + entre5e7)
} else {
    console.log('O aluno está ' + acimaDe7)
}