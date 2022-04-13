const nome = "Sereno";
let nome2 = "";
let pessoaDefault = {
    nome: "Sereno",
    idade: "19 anos"
    trabalho: "Estudante"
}

let nomes = ("Sereno", "Maria", "João");

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Sereno",
        idade: "19 anos",
        trabalho: "Estudante",
    },
    {
        nome: "Maria",
        idade: "35 anos",
        trabalho: "Médica",
    }
];


function alterarNome() {
    nome2 = "Maria";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------IMPRIMIR PESSOAS------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "João",
    idade: "24 anos"
    trabalho: "Skatista"
});

imprimirPessoa();