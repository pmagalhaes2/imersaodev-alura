var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))

var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite a operação desejada: \n\n1 - Soma; \n2 - Subtração; \n3 - Multiplicação; \n4 - Divisão;")


if (operacao == 1){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 2){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 3){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4) {
  var resultado = primeiroValor /  segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}else{
  alert("Digite uma opção válida!")
}