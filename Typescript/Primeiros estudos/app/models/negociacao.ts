export class Negociacao {
	#data;
	#quatidade;
	#valor;

	constructor(data, quantidade, valor){
		this.#data = data;
		this.#quatidade = quantidade
		this.#valor = valor
	}

	get data(){
		return this.#data;
	}
	get quantidade(){
		return this.#quatidade;
	}
	get valor(){
		return this.#valor;
	}
	get volume(){
		return this.#quatidade * this.#valor;
	}
}
