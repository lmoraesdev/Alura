import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Diretor", 10000, "123.456.789-10");
diretor.cadastrarSenha("123")
const gerente = new Gerente ("Gerente", 5000, "123.456.789-11");
gerente.cadastrarSenha("123")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
