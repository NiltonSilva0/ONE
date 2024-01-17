alert("Boas vinda ao jogo do número secreto");

let numeroSecreto = 29;

let numeroUser;




while (numeroUser != numeroSecreto)
{
    numeroUser = prompt("Escolha um número entre 1 e 30: ");

    if(numeroUser < numeroSecreto)
{
    alert(`O número secreto é maior que ${numeroUser}`);
}else if (numeroUser > numeroSecreto)
{
    alert(`O número secreto é menor que ${numeroUser}`);
}

}
    alert(`Você acertou, o número secreto é ${numeroSecreto}, parabéns!`);      





    

