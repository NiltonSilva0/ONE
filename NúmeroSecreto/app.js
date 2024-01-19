        let listaNumeros = [];
        let tamanhoMaxDaLista = 10;
        let numeroSecreto = numeroAleatorio();
        let tentativas = 1;
        exibirMensagemInicial();
        function exibirTextoNaTela(tag, texto){
            let campo = document.querySelector(tag);
            campo.innerHTML = texto;
            responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
        }
        function numeroAleatorio(){
            let numeroEscolhido =  parseInt(Math.random() * tamanhoMaxDaLista + 1);
            let quantidadeDeElementosNaLista = listaNumeros.length;
            if(quantidadeDeElementosNaLista == listaNumeros){
                listaNumeros = [];
            }
            if(listaNumeros.includes(numeroEscolhido)){
                return numeroEscolhido();
            }else{
                listaNumeros.push(numeroEscolhido);
                return numeroEscolhido;
            }
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

        


        
        


