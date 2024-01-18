        // let titulo = document.querySelector("h1");
        // titulo.innerHTML = "Jogo do número secreto";

        // let paragrafo = document.querySelector("p");
        // paragrafo.innerHTML = "Escolha um número entre 1 e 10";

        let numeroSecreto = numeroAleatorio();
        let tentativas = 1;
        exibirMensagemInicial();
        function exibirTextoNaTela(tag, texto){
            let campo = document.querySelector(tag);
            campo.innerHTML = texto;
        }
        function numeroAleatorio(){
            return parseInt(Math.random() * 10 + 1);
        }
        function verificarChute(){
            let chute = document.querySelector("input").value;

            if (chute == numeroSecreto){
                exibirTextoNaTela("h1", "Acertou!");
                let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
                let mensagemTentativa = `Voçê descobriu o número secreto depois de ${tentativas} ${palavraTentativa}`
                exibirTextoNaTela("p", mensagemTentativa);
                document.getElementById("reiniciar").removeAttribute("disabled");
            }else if (chute > numeroSecreto){
                exibirTextoNaTela("p", "O numero secreto é menor");
            }else{
                exibirTextoNaTela("p", "O numero secreto é maior");
            }
            tentativas++;
            limpaCampos();
        }

        function limpaCampos(){
            chute = document.querySelector("input");
            chute.value = "";
        }

        function exibirMensagemInicial(){
            exibirTextoNaTela("h1", "Jogo do número secreto");
        exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
        }

        function reiniciarJogo(){
        numeroSecreto = numeroAleatorio();
        limpaCampos();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById("reiniciar").setAttribute("disabled", true);
        }

        


        
        


