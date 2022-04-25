import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Joao";
cliente1.cpf = 12345678910;

cliente2.nome = "Leandro";
cliente2.cpf = 88845678910;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.agencia = 1001;
contaCorrenteJoao.cliente = cliente1;

const contaCorrenteLeandro = new ContaCorrente();
contaCorrenteLeandro.agencia = 1001;
contaCorrenteLeandro.cliente = cliente2;

console.log(contaCorrenteJoao);
console.log(contaCorrenteLeandro);
console.log();

