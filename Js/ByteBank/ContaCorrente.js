import { Cliente } from "./Cliente.js";

export class ContaCorrente {
	static numeroDaContas = 0;

	agencia;

	_cliente;

	get cliente() {
		return this._cliente;
	}

	set cliente(value) {
		this._cliente = value;
	}

	_saldo = 0;

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

	constructor(agencia, cliente) {
		this.agencia = agencia;
		this.cliente = cliente;
		ContaCorrente.numeroDaContas++;
	}
}
