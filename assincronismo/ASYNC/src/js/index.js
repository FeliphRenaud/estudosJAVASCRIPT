/* SET TIME OUT  */

// função que executa uma ação apos um certo tempo pré definido pelo programador

console.log("ainda nao executou 1 ");

setTimeout(function () {
  console.log("requisição assincrona com time out de 2 segundos");
  
}, 2000)

console.log("ainda nao executou 2 ");

console.log("ainda nao executou 3 ");

/* SET INTERVAL */

//executa uma função de tempos em tempo estilo um loop infinito
// deve ser usada com parcimonia pois pode consumir muita memoria
// no computador do usuario dependendo da ação
// possui tempo maior de execuçào em comparação ao set time out


console.log("ainda nao executou 4 ");

console.log("ainda nao executou 5 ");

/*
setInterval(() => {
  console.log("Intervalo assincrono do SetInterval");
  
}, 3000);
*/
//Foi comentado para não atrapalhar o andamento dos estudos

/* PROMISSES */
//são promessas de que havera um valor em um ponto futuro

const promessa = Promise.resolve(5 + 5)

console.log("algum codigo  estudos de promisses");

promessa.then(value => {
  console.log(`A soma é ${value}`);
  return value
})
  .then((value) => value * 2)
  .then((value)=> console.log(`agora é ${value}`)
  )

console.log("outro codigo dentro dos estudos de promisses ");

/* Tratativas de erros em promisses  */

Promise.resolve(4 * "asd").then((n) => {
  if (Number.isNaN(n)) {
    throw new Error("Valores Invalidos")
  }
}).catch((err)=> console.log(`Um erro ocorreu: ${err}`)
)

/* REJEIÇÃO DE PROMISSES */

// acontece quando nos resolvemos dar um
//  REJECT no codigo para nao receber aquele valor

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10 ) {
      resolve(`O numero ${n} é maior que 10 `)
    } else {
      reject(new Error(`O numero ${n} é muito baixo`))
    }
  }) 
}

const a = checkNumber(20)
const b = checkNumber(20)
console.log(a,b);


/* METODO ALL - RESOLVENDO VARIAS PROMISES -  */
// ao inves de criar uma fila de promessas ele resolve multiplas promessas ao mesmo tempo

const p1 = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve(20-10)
  },4000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30)
  } else {
    reject("Erro!")
  }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

//debugger

/* ASYNC FUNCTIONS */

async function somarComDelay(a,b) {
  return a+b
}

somarComDelay(5, 5).then((value) => {
  console.log(`O valor da soma é: ${value}`);
  
})

/* ASYNC AWAIT */

function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolvendo a promisse ")
    },2000)
  })  
}

async function chamandoAsync() {
  console.log("Chamando a promise e esperando o resultado  ");
  const result = await resolveComDelay()
  console.log(`o resultado chegou: ${result}`);
  
}

chamandoAsync()

/* GENERATORS */

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);