import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Joao", 12345678910);
const cliente2 = new Cliente("Leandro", 98765432120);

const contaCorrenteJoao = new ContaCorrente(1002, cliente1);
const contaCorrenteLeandro = new ContaCorrente(1002, cliente2);

console.log(contaCorrenteJoao, contaCorrenteLeandro);
