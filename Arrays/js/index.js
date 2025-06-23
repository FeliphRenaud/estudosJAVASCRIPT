// concatenação de arrays

const numbers = [5, 3, 4]

const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers);


// loops em arrays

const users = [ "Feliph", "João", "Pedro", "Miguel", "Matheus"  ]

for (let i = 0; i < users.length; i++){
  console.log(`Lista de usuarios: ${users[i]}`);
  
}

//push e pop
//no fim do array

const array = ["a", "b", "c"]
console.log(array);
array.push("d")
console.log(array);
array.pop()
console.log(array);

const itemRemovidoArray = array.pop()

console.log(`Item removido é: ${itemRemovidoArray}`);
console.log(array);
array.push("z", "x", "y")
console.log(array);

//shift e unshift
//inicio do array shift removendo e unshift inserindo 

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter);
console.log(letters);

letters.unshift( "p","q","r")
letters.unshift("z")

console.log(letters);

//indexOf
//permite encontraro indice de um elemento em um array que passamos como metodo

const myElements = [ "morango", "maça", "Abacate", "pera", "morango"]
console.log(myElements.indexOf("morango"));
console.log(myElements.indexOf("abacate")); // case sensitive

//lastIndexOf
//é utilizado quando ha repetições de elementos e precisamos do indice da ultima ocorrencia 
console.log(myElements.lastIndexOf("morango"));

//slice
//intervalo de um elemento
//recortando o array para apenas aquilo que desejamos

const testeSlice = ["a", "b", "c", "d", "e", "f"]

const testeSliced = testeSlice.slice(2, 4)

console.log(`Array Original de Slice ${testeSlice}`);
console.log(`Utilizando o slice no array ${ testeSliced}`);

const subTesteSliced = testeSlice.slice(2, 4 + 1)
console.log(subTesteSliced);

//forEach
// é como se fosse uma estrutura de repetição for ou while mas é um metodo
const nums = [1,2,3,4,5]
nums.forEach((numero) => {
  console.log(`O numero é ${numero}`);
  
})

const clients = [ "Doria", "Tarcizio", "Heleno", "Sergio", "Rosangela"]
clients.forEach((client) => {
  console.log(`o nome do cliente é: ${client}`);
  
})

const posts = [
  { title:"Rambo", category:"Ação"},
  { title:"Panico", category:"Terror"},
  { title:"Dr:. Dolitte", category: "Comedia"},
  { title:"Titanic", category:"Ficção"},
  { title:"Star Wars", category:"Documentario"},
  { title:"Um lugar chamado Nothing Hill", category:"Romance"},
]

posts.forEach((post) => {
  console.log(`Titulo: ${post.title}, genero: ${post.category}`);
  
})

//includes
//retorna um boolean confirmando se existe ou não a insidencia na lista 

const brands = ["BMW", "VW", "KIA"]
console.log(brands.includes("BMW"));
console.log(brands.includes("Fiat"));

if (brands.includes("BMW")) {
  console.log("Ha carros da marca BMW");
}

//reverse

const reverseTest = [1, 2, 3, 4, 5]
console.log(reverseTest);
reverseTest.reverse()// reverte o array Original CUIDADO
console.log(reverseTest);


// objetos literais ou Object Literals


const person = { 
  name: "feliph",
  age: 32,
  job: "dev"
} 

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person.name);
console.log(typeof person);

// criando e deletando propriedades

const car = { 
  engine: 2.0,
  brand: "Renault",
  model: "Sandero RS ",
  whp: 150,
  maxSpeed: 206
}
console.log(car);

car.doors = 4

console.log(car);

delete car.doors

console.log(car);

// instanceOf

const obj = {
  a: "teste",
  b: true
}
console.log(obj instanceof Object);

const obj2 = {
  c:[]
}

Object.assign(obj2, obj)

console.log(obj2);

// metodo keys de object e metodo entries

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// METODOS DE STRING

//trim
const trimTeste = "   testando \n   "

console.log(trimTeste);
console.log(trimTeste.trim());

//padstart

const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0")
console.log(testePadStart);
console.log(newNumber);

//padEnd

const padEnd = newNumber.padEnd(10, "0")
console.log(padEnd);

// split

const frase = " Nunca comece uma guerra que não pode ganhar"

const arrayDaFraseEmPalavras = frase.split(" ")
const arrayDaFraseEmLetras = frase.split("")
console.log(arrayDaFraseEmPalavras);
console.log(arrayDaFraseEmLetras);

//join

const reunificadorDeFrase = arrayDaFraseEmPalavras.join(" ")
console.log(reunificadorDeFrase);

const itemsParaCompra = ["Mouse", "Teclado", "Monitor"]
const fraseParaSetorCompras = `Precismaos comprar ${itemsParaCompra.join(", ")}`
console.log(fraseParaSetorCompras);

// repeat

const repeat = " testando"
console.log(repeat.repeat(3));


//restOperator

const somaInfinita = (...args) => {
  let total = 0

  for (let i = 0; i < args.length; i++){
    total += args[i]
  }
  return total
}

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(somaInfinita(1,2,3));

//ForOf

const somaInfinita2 = (...args) => {
  let total = 0 
  for (num of args) {
    total += num
  }
  return total
}

console.log(somaInfinita2(3,5,7,9,1));

//destruturing em objetos

const usersDetails = { 
  firstName:"feliph",
  lastName:"renaud",
  job:"Programador"
}

const { firstName, lastName, job } = usersDetails
console.log(firstName, lastName, job);

// destructuring copm arrays

const myList = ["avião", "submarino", "carro", "Trator"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC);

//json

const myJson = '{ "name": "Feliph", "age": 31, "skills": ["JS", "PHP", "TS"]}'

console.log(myJson);
console.log(typeof myJson);

//json -> object -> json

const myObject = JSON.parse(myJson)

console.log(myObject);
console.log(typeof myObject);

const myNewObject = JSON.stringify(myObject)
console.log(myNewObject);
console.log(typeof myNewObject);





