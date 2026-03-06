import readlinesync = require("readline-sync");

//DECLARAR A VARIAVEL TIPO NUMERO 
let numeros: number [] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

//pedir que o usuario escreva um numero
const numeroEscolhido = readlinesync.questionFloat("Informe os numeros inteiros: ")
console.table(numeros)

//FAZER O LAÇO DE REPTIÇÃO 
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroEscolhido) {
        console.log(`O número ${numeroEscolhido} está localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`O número ${numeroEscolhido} não foi encontrado!`);
}






