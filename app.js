alert("Boas vinda ao jogo do número secreto");

let numeroSecreto = 29;

let numeroUser = prompt("Escolha um número entre 1 e 30: ");

if (numeroUser!= numeroSecreto) 
{
    alert("Voçê errou! Tente novamente!");
     numeroUser = prompt("Escolha um número entre 1 e 30: ");
}else 
{
    alert(`Você acertou, o número secreto é ${numeroSecreto}, parabéns!`);      
}


