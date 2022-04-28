import { Cliente } from "./Cliente/Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./Sistema/SistemaAutenticacao.js";

const diretor = new Diretor ("Diretor", 10000, "123.456.789-10");
diretor.cadastrarSenha("123")
const gerente = new Gerente ("Gerente", 5000, "123.456.789-11");
gerente.cadastrarSenha("123")
const cliente = new Cliente ("Cliente", "123.456.789-12", "123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
