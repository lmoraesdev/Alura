import { Cliente } from "./Cliente.js";

export class ContaCorrente {

	constructor(agencia, cliente) {
		this._agencia = agencia;
		this._cliente = cliente;
		this._saldo = 0;
		ContaCorrente.numeroDaContas++;
	}

	static numeroDaContas = 0;


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
