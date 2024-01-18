//Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");

titulo.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function mensagemNoConsole()
{
    console.log("O botão foi clicado!");
}

let botaoConsole = document.getElementById("console");

botaoConsole.addEventListener("click", mensagemNoConsole);

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function mensagemJS()
{
    alert("Eu amo JS!");
}

let botaoAlerta = document.getElementById("alerta");

botaoAlerta.addEventListener("click", mensagemJS);

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function cidadeDoBrasil() 
{
    let cidade = prompt("Cite o nome de uma cidade do Brasil? ");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

let botaoPrompt = document.getElementById("prompt");

botaoPrompt.addEventListener("click", cidadeDoBrasil);

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function soma()
{
    let numero1 = parseInt(prompt("Digite um número: "));
    let numero2 = parseInt(prompt("Digite outro número: "));
    let soma = numero1 + numero2;
    alert(`A soma é: ${soma}`);
}

let botaoSoma = document.getElementById("soma");

botaoSoma.addEventListener("click", soma);
