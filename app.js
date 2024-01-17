alert("Boas vinda ao jogo do número secreto");

let numeroSecreto = 29;

let numeroUser = prompt("Escolha um número entre 1 e 30: ");

if (numeroUser == numeroSecreto) 
{
    alert(`Você acertou, o número secreto é ${numeroSecreto}, parabéns!`);      
}else 
{
    while (numeroUser != numeroSecreto)
    numeroUser = prompt("Escolha um número entre 1 e 30: ");
}


