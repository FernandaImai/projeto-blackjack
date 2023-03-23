/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    



  function iniciarJogo(){
   let novaRodada = confirm(`Bem vindo(a) ao jogo de BlackJack!
   Gostaria de começar uma nova rodada? `)

   let jogador =[]
   let computador =[]

   

    if(novaRodada){
      let cartaSorteada = true
      while(cartaSorteada){

         let cartaJogador = jogador.push(comprarCarta(), comprarCarta())
         let cartaComputador = computador.push(comprarCarta(), comprarCarta())

         if((jogador[0].valor === 11 && jogador[1].valor=== 11) || (computador[0].valor===11 && computador[1]===11)){

         jogador =[]
         computador =[]
      }else{
         cartaSorteada = false
      }
      }
      let textoJogador = 'Jogador:'
      let textoComputador = 'Computador:'

      let pontosJogador = 0
      let pontosComputador = 0

      for(let i=0; i<jogador.length; i++){
         textoJogador = textoJogador + jogador[i].texto + ''
         pontosJogador = pontosJogador + jogador[i].valor
      }

      for(let i= 0; i< computador.length; i++){
         textoComputador = textoComputador + computador[i].texto + ''
         pontosComputador = pontosComputador + computador[i].valor
      }

      let novaCarta = true
      while(novaCarta){
         if(pontosJogador > 21){
            break
         }
         let perguntaMaisCarta = confirm(`${textoJogador} 
         A carta revelada do computador é ${computador[0].texto}. Gostaria de comprar mais uma carta?`)
        
         if(perguntaMaisCarta){
            let cartas = comprarCarta()
            jogador.push(cartas)
            pontosJogador += cartas.valor
            textoJogador += `${cartas.texto}`
         }else{
            novaCarta = false
         }
      }
      while(pontosComputador<= pontosJogador && pontosJogador <= 21){
         let novaCartaComputador = comprarCarta()
         computador.push(novaCartaComputador)
         pontosComputador += novaCartaComputador.valor
         textoComputador +=  `${novaCartaComputador.texto}`
      }

      let resultado = ''
      if(pontosJogador > 21){
         resultado = 'O computador ganhou!'

      }else if (pontosComputador>21){
         resultado = 'Você ganhou!!'


      }else if(pontosComputador > pontosJogador){
         resultado=' O computador ganhou!'
      }else if( pontosJogador> pontosComputador){
         resultado = 'Você ganhou!!'
      }else{
         resultado = 'Empate!'
      }

      alert(`Cartas ${textoJogador}. Sua pontuação:${pontosJogador}
      Cartas ${textoComputador}. Pontuação do computador: ${pontosComputador}
      Resultado do jogo: ${resultado}`)


    }else{
      alert(`O jogo acabou!`)
    }



  }

  iniciarJogo()