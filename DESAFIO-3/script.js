var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

alert("Tente adivinhar o número em que o computador está pensando.\n\nVocê possuí 3 tentativas!")
for(var i=0; i < tentativas; i++){
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  if(numeroSecreto==chute){
    alert("Parabéns, você acertou!!!")
    break
  }else if(chute < numeroSecreto){
    alert("Hmm.. Tente um número maior!")
  }else if(chute > numeroSecreto){
    alert("Hmm.. Tente um número menor!")
  }
}
if(chute != numeroSecreto){
  alert("Poxa.. Suas tentativas esgotaram.. O número correto era " + numeroSecreto + "!")
}