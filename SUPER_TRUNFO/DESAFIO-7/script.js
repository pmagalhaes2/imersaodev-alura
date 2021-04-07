var cartaoHomemDeFerro = {
    nome: "Homem de Ferro",
    imagem: "https://pa1.narvii.com/7099/1763732ced92d729a190673890ec286457f64784r1-500-250_hq.gif",
     atributos: {
      força: 5,
      velocidade: 6,
      habilidade: 2,
      equipamento: 5,
      inteligência: 6   
    }
  }
  
  var cartaThor = {
    nome: "Thor",
    imagem: "https://i.pinimg.com/originals/6a/97/a3/6a97a33fd255a81bd9dc406249e515d5.gif",
    atributos: {
      força: 6,
      velocidade: 5,
      habilidade: 3,
      equipamento: 3,
      inteligência: 2
    } 
  }
  var cartaViuvaNegra = {
    nome: "Viúva Negra",
    imagem: "https://pa1.narvii.com/6609/d1a27562f8894f5ad47c0260ef3ee73ba41234ef_hq.gif",
    atributos: {
      força: 3,
      velocidade: 3,
      habilidade: 4,
      equipamento: 1,
      inteligência: 3
    } 
  }
  var cartaHulk = {
    nome: "Hulk",
    imagem: "https://i.pinimg.com/originals/7c/ad/51/7cad5136ac50af4398cffd9aeaea6ed6.gif",
    atributos: {
      força: 6,
      velocidade: 5,
      habilidade: 4,
      equipamento: 1,
      inteligência: 1
    } 
  }
  var cartaCapitaoAmerica = {
    nome: "Capitão América",
    imagem: "https://i.pinimg.com/originals/b8/b0/2f/b8b02f96877ce8000608a5215977f6c7.gif",
    atributos: {
      força: 5,
      velocidade: 5,
      habilidade: 5,
      equipamento:  2,
      inteligência: 3
    }
  }
  var cartaCapitaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://i2.wp.com/78.media.tumblr.com/002c6880f89ed5c39ec0a097acf4d42c/tumblr_pf9slawUZA1slgzc2o4_540.gif?ssl=1",
    atributos: {
      força: 5,
      velocidade: 6,
      habilidade: 5,
      equipamento: 2,
      inteligência: 3
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaCapitaMarvel, cartaCapitaoAmerica, cartaHulk, cartaViuvaNegra, cartaThor, cartaoHomemDeFerro]
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 6)
    while (numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random() * 6)
  }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirOpcoes()
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoesTexto += "</p>"
    opcoesTexto += "<div class='lista'>" + "<img src=" + cartaJogador.imagem + " height='182' width='320' ></p><span class='titulos'>" +     cartaJogador.nome + " (Jogador) " + "</span></div>"
    opcoesTexto += "</p>"
    opcoesTexto += "<div class='lista'>" + "<img src=" + cartaMaquina.imagem + " height='182' width='320' ></p><span class='titulos'>" +     cartaMaquina.nome + " (Máquina) " + "</span></div>"
    opcoes.innerHTML = opcoesTexto
    
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName("atributo")
    for(var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked){
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      alert("Você venceu!!!")
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert("Poxa.. você perdeu!")
    }else{
        alert("Você empatou!")
    }
  }