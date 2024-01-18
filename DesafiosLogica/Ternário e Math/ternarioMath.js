//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Bem-vindo! Este é um programa de boas-vindas.");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// Atribuir o seu nome à variável "nome"
let nome = "Nilton silva";

// Exibir a mensagem no console com interpolação de strings
console.log(`Olá, ${nome}!`);
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// Atribuir o seu nome à variável "nome"
let nome = "Nilton Silva";

// Exibir a mensagem de alerta com o seu nome
alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// Pergunta ao usuário usando o prompt
let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");

// Exibir a resposta no console
console.log(`Sua linguagem de programação preferida é: ${linguagemPreferida}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// Atribuir valores numéricos às variáveis
let valor1 = 5;
let valor2 = 7;

// Realizar a soma dos valores e armazenar o resultado
let resultado = valor1 + valor2;

// Exibir a mensagem no console
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// Atribuir valores numéricos às variáveis
let valor1 = 10;
let valor2 = 4;

// Realizar a subtração dos valores e armazenar o resultado
let resultado = valor1 - valor2;

// Exibir a mensagem no console
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// Solicitar a idade ao usuário usando prompt
let idade = prompt("Por favor, insira sua idade:");

// Converter a entrada para um número
idade = parseInt(idade);

// Verificar se a pessoa é maior ou menor de idade e exibir mensagem apropriada
if (idade >= 18) {
    console.log("Você é maior de idade. Pode prosseguir!");
} else {
    console.log("Você é menor de idade. Recomendamos responsabilidade!");
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// Solicitar um número ao usuário usando prompt
let numero = prompt("Digite um número:");

// Converter a entrada para um número
numero = parseFloat(numero);

// Verificar se o número é positivo, negativo ou zero e exibir mensagem apropriada
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// Atribuir um valor numérico à variável "nota"
let nota = 8;

// Utilizar if-else para determinar se a nota é maior ou igual a 7
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// Gerar um número aleatório entre 0 (inclusive) e 1 (exclusivo)
let numeroAleatorio = Math.random();

// Exibir o número aleatório no console
console.log("Número Aleatório: " + numeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// Gerar um número aleatório inteiro entre 1 e 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Exibir o número aleatório no console
console.log("Número Aleatório entre 1 e 10: " + numeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// Gerar um número aleatório inteiro entre 1 e 1000
let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

// Exibir o número aleatório no console
console.log("Número Aleatório entre 1 e 1000: " + numeroAleatorio);









