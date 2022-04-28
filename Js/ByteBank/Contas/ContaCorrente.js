import { Conta } from "./Contas/Conta.js";

export class ContaCorrente extends Conta {
	static numeroDaContas = 0;
	constructor(cliente, agencia) {
		super(0, cliente, agencia);
		ContaCorrente.numeroDaContas++;
	}

	sacar(valor) {
		let taxa = 1.1;
		return this._sacar(valor, taxa);
	}
}
