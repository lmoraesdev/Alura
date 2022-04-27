export class Conta{
	constructor(saldoInicial, cliente, agencia){
		this._cliente = cliente;
		this._agencia = agencia;
		this._saldo = saldoInicial;
	}

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	}

	depositar(valor) {
		if (valor > 0) {
			this._saldo += valor;
		}
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}
