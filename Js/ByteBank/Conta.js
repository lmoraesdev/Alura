export class Conta {
	constructor(saldoInicial, cliente, agencia) {
		if (this.constructor == Conta) {
			throw new Error("Você não pode instanciar Conta diretamente");
		}
		this._cliente = cliente;
		this._agencia = agencia;
		this._saldo = saldoInicial;
	}

	get cliente() {
		return this._cliente;
	}

	set cliente(value) {
		this._cliente = value;
	}

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get clinte() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	sacar(valor) {
		throw new Error("O metodo sacar precisa ser implementado");
	}

	_sacar(valor, taxa) {
		const valorSacado = valor * taxa;
		if (this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}
		return 0;
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
