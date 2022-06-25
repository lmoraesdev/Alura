export function valida(input){
	const tipodeInput = input.dataset.tipo

	if(validadores[tipodeInput]){
		validadores[tipodeInput](input)
	}
}

const validadores = {
	dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
	const dataRecebida = new Date(input.value);
	let mensagem = "";

	if (!maiorQue18(dataRecebida)) {
		mensagem = "Você deve ser maior que 18 anos para se cadastrar.";
	}

	input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
	console.log(data);
	const dataAtual = new Date(); //date() é automaticamente preenchido com a data atual
	const dataMais18 = new Date(
		data.getUTCFullYear() + 18,
		data.getUTCMonth(),
		data.getUTCDate()
	);

	return dataMais18 <= dataAtual;
}
