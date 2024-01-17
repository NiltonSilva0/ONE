alert("Boas vinda ao jogo do número secreto");

let numeroSecreto = 29;

let numeroDigitado;

let tentativas = 1;

while (numeroDigitado != numeroSecreto)
{
numeroDigitado = prompt("Escolha um número entre 1 e 30: ");

if(numeroDigitado == numeroSecreto){
    alert(`Você acertou, o número secreto é ${numeroSecreto}, voçê acertou após ${tentativas} tentativas, parabéns!`);
}

else if(numeroDigitado < numeroSecreto)
{
alert(`O número secreto é maior que ${numeroDigitado}`);
}else
{
alert(`O número secreto é menor que ${numeroDigitado}`);
}

tentativas++;

}
        







