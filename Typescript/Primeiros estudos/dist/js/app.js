import { Negociacao } from "./models/negociacao";
const negociacao = new Negociacao(new Date(), 1, 200);
console.log(negociacao.volume);
