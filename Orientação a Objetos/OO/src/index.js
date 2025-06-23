//Object Literals - Metodos 
const animal = {
  nome: "Cat",
  miado: function () {
    console.log("miau");
    
  }
}

console.log(animal.nome);
console.log(animal.miado());

// aprofundando em metodos

const pessoa = { 
  nome: "feliph",

  getNome: function ()  {
    return `O nome do usuario é ${this.nome}`
  },

  setNome: function (novoNome){
    this.nome = novoNome
  }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Carlos")
console.log(pessoa.getNome());

//prototype herança

const text = "asd"
console.log(Object.getPrototypeOf(text));

const boll = true
console.log(Object.getPrototypeOf(boll));

const arr = []
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// mias sobre prototype

const myObject = { 
  a:"b"
}

console.log(Object.getPrototypeOf(myObject));
//verificando igualdade

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject)
//cria uma cadeia de objetos mantendo as caracteristicas do pai 
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject)=== myObject);

// Classes Basicas
const cachorro = { 
  raca: null,
  patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao);
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);
const bullDog = Object.create(cachorro)
bullDog.raca = "BullDog"
console.log(bullDog);
console.log(bullDog.raca);
console.log(bullDog.patas);

// funções Construtoras

function criarCachorro  (nome, raca, pelagem,cor) {
  const cachorro = Object.create({})
  cachorro.nome = nome
  cachorro.raca = raca
  cachorro.pelagem = pelagem
  cachorro.cor = cor

  return cachorro
}

const bob = criarCachorro("bob", "Vira-Latas", "curta", "Caramelo")
console.log(bob);
const bem = criarCachorro("Bendito")
console.log(bem);

// classes baseadas em funções OU funções como classes

function Gato(nome,raca, cor, pelagem) {
  this.nome = nome
  this.raca = raca
  this.cor = cor
  this.pelagem = pelagem
} 

const manu = new Gato("Manu", "Persa", "Preto", "Longa")
console.log(manu);

//Metodos na funçào construtora OU  classe função com metodos

Gato.prototype.miar = function () {
  console.log("Miau")
}
console.log(Gato.prototype);

manu.miar()
console.log(manu);

// Classes no ES6

class CachorroClass{
  constructor(nome, raca) {
    this.nome = nome
    this.raca = raca
  }
}

const Simba = new CachorroClass("Simba", "Boxer")
console.log(Simba);
console.log(Simba.raca);
console.log(Object.getPrototypeOf(Simba));

//NAO SE PODE ADICIONAR PROPRIEDADES DIRETAMENTE AS CLASSES
// isso deve ser feito ao iniciala ou via prototype

// mais sobre as classes

class Caminhao {
  constructor(cor, eixos, tracao, potencia) {
    this.cor = cor
    this.eixos = eixos
    this.tracao = tracao
    this.potencia = potencia
  }

  descreverCaminhao() {
    console.log(`este caminhao tem ${this.eixos} eixos é da cor ${this.cor} tem ${this.potencia} de potencia e a tracao é ${this.tracao}`);
    
  }
 
}

const scania = new Caminhao("Laranja", 3, "3x2", "620hp")
console.log(scania.descreverCaminhao());






