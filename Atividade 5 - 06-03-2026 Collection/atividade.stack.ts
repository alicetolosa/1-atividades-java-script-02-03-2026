import { Stack } from "./Stack";
import * as readlineSync from "readline-sync";

const pilha = new Stack <string>(); //pilha de pratos

let opcao = -1;
while(opcao !==0){
  console.log("\nBEM VINDO A MENU BANCO DE LIVROS");
  console.log("1 - Adicionar Livros na Pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar livros da Pilha");
  console.log("0 - Sair");

   opcao = readlineSync.questionInt("\nDigite a opcao desejada:  "); //solicitar nome do cliente

   switch (opcao) {
       case 1:
         const livro = readlineSync.question("Digite o nome do Livro: "); //solicitar nome cliente
         pilha.push(livro);
         console.log("\nLivro adicionado!");
         break;
   
       case 2:
         console.log("LISTA DE LIVROS"); //Clientes aguardando 
   
         if (pilha.isEmpty()) {
           console.log("Um Livro foi retirado da pilha");
         } else { 
            pilha.printStack();
         }
         break;
   
       case 3:
         if (pilha.isEmpty()) {  //verifica se a fila esta vazia 
           console.log("Um Livro foi retirado da pilha"); //msg inf fila vazia
         } else {
           const livroEscolhido = pilha.pop();
           console.log(`Livro retirado: ${livroEscolhido}`); //msg nome do cliente chamado
           console.log("\n");
         }
         break;
   
       case 0:
         console.log("Programa finalizado.");
         break;
   
       default:
         console.log("Opção inválida.");
     }




}