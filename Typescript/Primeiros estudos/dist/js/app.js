import { negociacaoController } from "./controllers/negociacao-controller.js";
const controller = new negociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
