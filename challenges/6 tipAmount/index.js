// calculadora de gorjetas 

let conta = parseFloat(prompt('digite aqui o valor da sua conta: '))
let porcentagemDaGorjeta = prompt('digite aqui qual porcentagem voce deseja dar de gorjeta: ')

let valorGorjeta = (conta * porcentagemDaGorjeta)/100

let valorTotal = conta + valorGorjeta 

alert ('o valor total de sua conta é : '+valorTotal)