const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(idElementoAudio) {
	const elemento = document.querySelector(idElementoAudio);

	if (elemento && elemento.localName === "audio") {
		elemento.play();
	} else {
		console.log("Elemento não encontrado ou Seletor inválido");
	}
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`;

	tecla.onclick = function () {
		tocaSom(idAudio);
	};
	tecla.onkeydown = function (evento) {
		if (evento.code === "Space" || evento.code === "Enter") {
			tecla.classLista.add("ativa");
		}
	};
	tecla.onkeyup = function () {
		tecla.classList.remove("ativa");
	};
}
