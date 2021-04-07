var cartaoHomemDeFerro = {
    nome: "Homem de Ferro",
    imagem: "https://pa1.narvii.com/7099/1763732ced92d729a190673890ec286457f64784r1-500-250_hq.gif",
    atributos: {
      Força: 5,
      Velocidade: 6,
      Habilidade: 2,
      Equipamento: 5,
      Inteligência: 6   
    }
  }
  
  var cartaThor = {
    nome: "Thor",
    imagem: "https://i.pinimg.com/originals/6a/97/a3/6a97a33fd255a81bd9dc406249e515d5.gif",
    atributos: {
      Força: 6,
      Velocidade: 5,
      Habilidade: 3,
      Equipamento: 3,
      Inteligência: 2
    } 
  }
  var cartaViuvaNegra = {
    nome: "Viúva Negra",
    imagem: "https://pa1.narvii.com/6609/d1a27562f8894f5ad47c0260ef3ee73ba41234ef_hq.gif",
    atributos: {
      Força: 3,
      Velocidade: 3,
      Habilidade: 4,
      Equipamento: 1,
      Inteligência: 3
    } 
  }
  var cartaHulk = {
    nome: "Hulk",
    imagem: "https://i.pinimg.com/originals/7c/ad/51/7cad5136ac50af4398cffd9aeaea6ed6.gif",
    atributos: {
      Força: 6,
      Velocidade: 5,
      Habilidade: 4,
      Equipamento: 1,
      Inteligência: 1
    } 
  }
  var cartaCapitaoAmerica = {
    nome: "Capitão América",
    imagem: "https://i.pinimg.com/originals/b8/b0/2f/b8b02f96877ce8000608a5215977f6c7.gif",
    atributos: {
      Força: 5,
      Velocidade: 5,
      Habilidade: 5,
      Equipamento:  2,
      Inteligência: 3
    }
  }
  var cartaCapitaMarvel = {
    nome: "Capitã Marvel",
    imagem:"https://i2.wp.com/78.media.tumblr.com/002c6880f89ed5c39ec0a097acf4d42c/tumblr_pf9slawUZA1slgzc2o4_540.gif?ssl=1",
    atributos: {
      Força: 5,
      Velocidade: 6,
      Habilidade: 5,
      Equipamento: 2,
      Inteligência: 3
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
    
    exibirCartaJogador()
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos){
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    
    var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName("atributo")
    for(var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked){
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = '<p class="resultado-final">Você venceu!!!</p>'
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Poxa.. você perdeu!</p>'
    }else{
        htmlResultado = '<p class="resultado-final">Você empatou!</p>'
    }
    
  divResultado.innerHTML = htmlResultado
  exibirCartaMaquina()
    document.getElementById('btnSortear').disabled = false
      document.getElementById('btnJogar').disabled = true
  }
  
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaMaquina.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
    
    var html = "<div id ='opcoes' class='carta-status'>"
    
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '<div>'
  }