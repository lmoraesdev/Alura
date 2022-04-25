class Cliente{
	nome;
	cpf;
	conta;

}

class ContaCorrente{
	agencia;
	_saldo = 0;

	sacar(valor){
		if(this._saldo >= valor){
			this._saldo -= valor;
			return valor;
		}
	}
	depositar(valor){
		if(valor > 0){
		this._saldo += valor;
		}
	}
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Joao";
cliente1.cpf = 12345678910;

cliente2.nome = "Leandro";
cliente2.cpf = 88845678910;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.saldo = 0;
contaCorrenteJoao.agencia = 1001;

const contaCorrenteLeandro = new ContaCorrente();
contaCorrenteLeandro.saldo = 0;
contaCorrenteLeandro.agencia = 1001;

console.log(contaCorrenteJoao);
console.log(cliente1);
console.log(cliente2);

