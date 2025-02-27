// Exercício - Calcular o IMC

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2) // peso : altura ao quadrado
}

console.log(calcularIMC(72, 1.74).toFixed(2));