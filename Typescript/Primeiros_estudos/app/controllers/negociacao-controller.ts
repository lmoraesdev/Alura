import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class negociacaoController {
	private inputData: HTMLInputElement;
	private inputQuantidade: HTMLInputElement;
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negociacoesView = new NegociacoesView("#negociacoesView");

	constructor() {
		this.inputData = document.querySelector("#data");
		this.inputQuantidade = document.querySelector("#quantidade");
		this.inputValor = document.querySelector("#valor");
		this.negociacoesView.update();
	}

	adiciona(): void {
		const negociacao = this.criaNegociacao();
		this.negociacoes.adiciona(negociacao);
		this.limparFormuladorio();
	}

	criaNegociacao(): Negociacao {
		const exp = /-/g;
		const date = new Date(this.inputData.value.replace(exp, ","));
		const quantidade = parseInt(this.inputQuantidade.value);
		const valor = parseFloat(this.inputValor.value);

		return new Negociacao(date, quantidade, valor);
	}

	limparFormuladorio(): void {
		this.inputData.value = "";
		this.inputQuantidade.value = "";
		this.inputValor.value = "";

		this.inputData.focus();
	}
}
