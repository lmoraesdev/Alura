import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Joao", 12345678910);
const cliente2 = new Cliente("Leandro", 98765432120);

const contaCorrenteJoao = new Conta(0, 1002, cliente1);
const contaCorrenteLeandro = new Conta(1002, cliente2);

const contaPoupancaLeandro = new Conta(50 ,1002, cliente2);

console.log(contaPoupancaLeandro);

console.log(contaCorrenteLeandro);
