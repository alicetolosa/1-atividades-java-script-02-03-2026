import readlinesync = require("readline-sync");

//colection array > tipo string 
//soliciar ao usuario que ele digite as cores 
//mostrar as cores 
//listar as cores 

//DECLARAR VARIAVEL 
let cores: string [] = [];

//PEDIR DADOS AO USUARIO 
for (let i =0; i < 5; i++){ //o laço de repetição, os dados vao repetir 5x
    cores[i] = readlinesync.question("Digite uma cor: ")
    }
console.log(`As cores informandas pelo usuario foi: ${cores}`)

cores.sort()
console.log(`Ass cores em ordem afabetica fica da seguinte forma: ${cores}`)
