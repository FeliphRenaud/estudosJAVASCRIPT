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

// arrow function

const testeArrow = () => {
  console.log('Esta é uma arrow function');
  
}

testeArrow()

const parOuImpar = (n) => {
  if (n% 2 === 0) {
    console.log(`o numero ${n} é par`);
    
  } else {
    console.log(`o numero ${n} é impar`);
    
  }
}

parOuImpar(2)

// arrow resumida

//metodo tradicional
const raizQuadrada = (x) => {
  return Math.sqrt(x)
}

console.log(raizQuadrada(2500));
//metodo reduzido 

const raizQuadrada2 = (x) => x ** 0.5;
console.log(raizQuadrada2(2500));

// função com parametro opcional

const multiplication = (m,n) => {
  if (n=== undefined) {
    return m*m
  } else {
    return m*n
  }

}

console.log(multiplication(5));
console.log(multiplication(5, 2));


const greeting = (name) => {
  if (!name) {
    console.log("Olá !");
    return
  }

  console.log(`Ola, ${name}`);
  
}

greeting()
greeting("Feliph")


// argumento default

const custonGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}`
}

console.log(custonGreeting("Feliph"));
console.log(custonGreeting("Feliph", "Bom dia meu chapa"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++){
    console.log(text);
    
  }
}

repeatText("testando")
repeatText("Agora repete 5 vezes", 5)

// Closure

const someFunction = () => {
  let text = "texto de dentro da closure "
  
  function display() {
    console.log(text);
    
  }

  display()
}

someFunction()

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m
  }
}

const c1 = multiplicationClosure(5) 
const c2 = multiplicationClosure(10)

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));


//recursão

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar");
    
  } else {
    const x = n - m
    console.log(x);

    untilTen(x,m)
    
  }
}

untilTen(100,7)

const factorial = (x) => {
  if (x === 0) {
    return 1
  } else {
    return x * factorial(x-1)
  }
}

const num = 6

const result = factorial(num)
console.log(`O fatorial do numero ${num} é:  ${result}`);


