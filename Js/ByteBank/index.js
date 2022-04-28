import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Joao", 12345678910);
const cliente2 = new Cliente("Leandro", 98765432120);

const contaCorrenteLeandro = new ContaCorrente(cliente2, 1002);
const contaPoupancaLeandro = new ContaPoupanca(50, cliente2, 1002);

console.log(contaCorrenteLeandro);
console.log(contaPoupancaLeandro);
