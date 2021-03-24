var valorEmDolar = prompt("Qual o valor em dólar que você deseja converter?")

var valorEmDolar = parseFloat(valorEmDolar)

var valorEmReal = valorEmDolar * 5.52

valorEmReal = valorEmReal.toFixed(2)

alert(valorEmDolar + " dólares " + "equivalem a " + valorEmReal + " reais.")