    alert("Boas vinda ao jogo do número secreto");

    //Gerando número aleatório e convertenho string pra numérico
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    
    let numeroDigitado;

    let tentativas = 1;

    while (numeroDigitado != numeroSecreto)
    {
    numeroDigitado = prompt("Escolha um número entre 1 e 30: ");

    if(numeroDigitado == numeroSecreto){
        break;
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

    //Operador Ternário
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    alert(`Você acertou, o número secreto é ${numeroSecreto}, voçê acertou após ${tentativas} ${palavraTentativa}, parabéns!`);


            







