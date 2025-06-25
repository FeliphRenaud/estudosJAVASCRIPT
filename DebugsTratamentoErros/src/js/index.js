// debugs

/* EXEMPLOS COMENTADOS PARA TRATAMENTO DE CODIGO NA CONSOLE */

//strict
//bloqueia erros como:
//  criaçcoes de variaveis globais
//  utilização de palavras restritas
//  o exclusao de propriedade de array

"use strict"
//  exemplo variavel global:
// opa = "teste"
// erro ReferenceError : opa is not defined

//jeito correto 
const opa = "teste"

// palavras restritas

// const undefined = 10 // gera erro no console
// SyntaxError: Identifier 'undefined' has already been declared (at index.js:1:1)

// exclusao de propriedades de um array
//delete [].length


/* CONSOLE.LOG PARA DEBUGAR*/

let a = 1
let b = 2 

if (a == 1) {
  a=b+2
}

console.log(a);

for (let i = 0; i < b; i++){
  a=a+2
  console.log(a);
  
}
if (a > 5) {
  a=25
}

console.log(a);

// neste exemplo
// console.log é utilizado para monitoramento
// do comportamento de A em todas as fazes
// de desenvolvimento da logica no programa
// atuando como
/*NÃO MOSTRANDO ERROS MAS SIM MONITORANDO O COMPORTAMENTO E PREVININDO BUGS */


/* DEBUGER */

/*instruçao que permite o debug no console do navegador em tempo real enquanto o programa executa 
ao controrio da utlizaçao do console.log que só nos mostra o resultado ao fim da execussao */

let c = 1 
let d = 2 
if (c == 1) {
  c = d +2
}

//debugger

for (let i = 0; i < d; i++){
  c=c+2
}

console.log("Executou o loop ");

//debugger

if (c > 5) {
  c=25
}

/*TRATAMENTO DE DADO POR FUNÇÃO */

/*Nunca se pode confiar nos dados passados pelo usuario 
sendo assim devemos criar validações e tratamentos para sanitizar 
e validar os dados recebidos */

const checknumber = (n) => {
  const result = Number(n)

  if (Number.isNaN(result)) {
    console.log("Valor incorreto");
    return
  }
  console.log("Valor correto");
  return result
  
}

checknumber(5) // CORRETO pois é nativamente um numero 
checknumber("5") // CORRETO valor passador como string porem convertido para Number na funçao check
checknumber(a)// CORRETO da linha 30 a 48 temos uma variavel A com valor sendo convertido a 25 portanto CORRETO
checknumber("a") // INCORRETO por ser string
//checknumber(z)// INCORRETO Z is not defined
checknumber("z")// INCORRETO por ser string
checknumber({})// INCORRETO por ser objeto 
checknumber([])// CORRETO um array vazio é convertido para numero 0
checknumber([5,2])// INCORRETO não pode ser convertido para numero pois possui multiplos elemtos 
checknumber([5])// CORRETO array com um unico elemento e numerico pode ser convertido
checknumber([a])// CORRETO valor da variavel A novamente
checknumber(["a"]) // INCORRETO 
checknumber("teste") // INCORRETO

/* EXCEPTIONS */
// sao erros gerados por nos mesmos EXEMPLO

//let x = 10 
//if (x != 11) {
//  throw new Error ("O valor nao pode ser diferente de 11")
//}

// esse erro aparece na console e é um meio de proteger as regras de negocio

/* Try Catch  */
// onde temtamos executar alg oe m try e caso de errado ele cai em catch
//util tanto para desenvolvimento de uma aplicação solida assim como para debugs

try {
  let w=5
  const soma = w + b 
  console.log(soma);

} catch (error) {
  console.log(`Erro no programa ${error}`);
  
}

/* AINDA DENTRO DO TRY CATCH TEMO O FINALLY */

try {
  const value = checknumber(a)
  if (!value) {
    throw new Error("Valores invalidos");
    
  }
} catch (error) {
  console.log(`Opa, aconteceu um problema: ${error}`);
  
} finally {
  console.log(`o codigo foi executado `);
  
}

/* Assertions */

// sao quando tratamentos de valores passados pelo usuario geram um erro 
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos")
  } else {
    console.log(`O array tem ${arr.length} elementos`);
    
  }
}

checkArray([])