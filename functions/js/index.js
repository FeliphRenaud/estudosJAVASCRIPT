function minhaFuncaoTeste() {
  console.log("teste");
  
}

minhaFuncaoTeste()

const minhaFuncaoEmVariavel = function () {
  console.log("Exemplo de uma função dentro de uma variavel");
  
}

minhaFuncaoEmVariavel()

function funcaoComoParametro(txt) {
  console.log(`(inicio de texto dentro da função )Imprimindo ${txt}`);
  
}

funcaoComoParametro(" (restante dentro do parametro )o .txt que foi definido como parametro ou argumento")

const a = 10
const b = 20 
const c = 30
const d = 40

function somaValores(n1, n2) {
  return n1 + n2
}

console.log(somaValores(a, b));
console.log(somaValores(c, d));
console.log(somaValores(a, d));
console.log(somaValores(b, c));

somaValores(a, b)
somaValores(c, d)
somaValores(a, d)
somaValores(b, c)


let y = 10 

function testandoScopo() {
  let y = 20
  console.log(`o y dentro da função tem valor de ${y}`);
  
}

console.log(`o y como variavel fora da função mantem o valor de ${y}`);
testandoScopo()

// escopo aninhado

let m = 10 

function escopoAninhado() {
  let m = 20 

  if (true) {
    let m = 30
    if (true) {
      let m = 40
      console.log(m);
      
    }
    console.log(m);
    
  }
  console.log(m);
  
}

escopoAninhado()

console.log(m);
