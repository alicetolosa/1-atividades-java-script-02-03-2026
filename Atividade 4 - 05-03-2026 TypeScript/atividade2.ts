import readlinesync = require("readline-sync");

let numeros = new Set<number>();

for (let i = 0; i < 10; i++) {
    const numero = readlinesync.questionFloat(`Digite o ${i + 1} numero: `);
    
    numeros.add(numero);
}

console.log("Listar dados do Set:");

for (const numero of numeros) {
   
    console.log(numero);
     
}

