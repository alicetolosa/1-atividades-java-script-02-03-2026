import { Queue } from "./Queue";
import * as readlineSync from "readline-sync";

const clientes = new Queue<string>(); //T string + fila de clientes

let opcao = -1;

while (opcao !== 0) {
  console.log("\nBEM VINDO A MENU BANCOGEN");
  console.log("1 - Adicionar Cliente");
  console.log("2 - Listar Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");

  opcao = readlineSync.questionInt("\nDigite a opcao desejada:  "); //solicitar nome do cliente

  switch (opcao) {
    case 1:
      const nome = readlineSync.question("Digite o nome do cliente: "); //solicitar nome cliente
      clientes.enqueue(nome);
      console.log("\nCliente adicionado!");
      break;

    case 2:
      console.log("CLIENTES AGUARDANDO NA FILA"); //Clientes aguardando 

      if (clientes.isEmpty()) {
        console.log("A fila está vazia.");
      } else {
        clientes.printQueue();
      }
      break;

    case 3:
      if (clientes.isEmpty()) {  //verifica se a fila esta vazia 
        console.log("A fila está vazia."); //msg inf fila vazia
      } else {
        const cliente = clientes.dequeue();
        console.log(`Cliente chamado: ${cliente}`); //msg nome do cliente chamado
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
