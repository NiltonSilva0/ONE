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

//Criar uma função que exibe "Olá, mundo!" no console.

function mensagem(){
    console.log("Olá, mundo!");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function mensagemNome(nome){
    console.log(`Olá, ${nome}!`);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero){
    return numero * 2;
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(numero1, numero2){
    return numero1 > numero2? numero1 : numero2;
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicacao(numero){
    return numero * numero;
}

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso){
    return peso / (altura * altura);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero){
    let fat = 1;
    for(let i = numero; i > 1; i--){
        fat *= i;
    }
    return fat;
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function dolar(valor){
    return valor * 4.80;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetroRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `A área é ${area} e o perímetro é ${perimetro}`;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroCircular(raio){
    let area = Math.PI * (raio * raio);
    let perimetro = 2 * Math.PI * raio;
    return `A área é ${area} e o perímetro é ${perimetro}`;
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ["Pedro", "Maria", "João"];

console.log(nomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

let nomes = ["Pedro", "Maria", "João"];

console.log(nomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let nomes = ["Pedro", "Maria", "João"];

console.log(nomes[2]);

























