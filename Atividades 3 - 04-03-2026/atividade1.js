import leia from "readline-sync";


let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let numero2 = leia.questionInt("Digite o último numero do intervalo: ");


if (numero1 >= numero2) {
    console.log("Intervalo invalidooo!");
} else {
    console.log(`No Intervalo entre ${numero1} e ${numero2}:`);

   
    for (let contador = numero1; contador <= numero2; contador++) {

       
        if (contador % 3 === 0 && contador % 5 === 0) {
            console.log(`${contador} é multiplo de 3 e 5`);
        }
    }
}