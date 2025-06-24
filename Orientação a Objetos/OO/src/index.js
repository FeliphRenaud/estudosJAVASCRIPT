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

const volvo = new Caminhao("Branco", 6, "6x6", "780hp")
console.log(volvo.descreverCaminhao());

class AnimaisVertebrados{
  constructor(tipo, subtipo, alimentacao, habitat, nome, caracteristicas) {
    this.tipo = tipo 
    this.subtipo = subtipo
    this.alimentacao = alimentacao
    this.habitat = habitat
    this.nome = nome
    this.caracteristicas = caracteristicas
  }

  descricaoVertebrado() {
    console.log(`O animal em questão é um ${this.nome} é do tipo ${this.tipo}, sub-tipo ${this.subtipo}, normalmente sua dieta é ${this.alimentacao} seu habitat é ${this.habitat} e como principal caracteristica ele tem: ${this.caracteristicas} `);
    
  }
}

const macaco = new AnimaisVertebrados("mamifero","primata", "Onivora", "Florestas tropicais", "chimpanzé", " estrutura robusta, com braços longos que se estendem abaixo dos joelhos, pernas curtas e uma pelagem preta ou castanha que cobre quase todo o corpo. Além disso, seus rostos são achatados, com olhos grandes, nariz pequeno e boca larga.")
console.log(macaco.caracteristicas);
console.log(macaco.descricaoVertebrado());

const crocodilo = new AnimaisVertebrados("Repitil", "crocodilia","Carnivoro","Anfibio predominantemente aquoso", "Crocodilo", " corpos robustos e focinhos alongados. Eles são caracterizados por suas mandíbulas poderosas, dentes afiados e pele grossa com escamas protetoras. ")
console.log(crocodilo.nome + crocodilo.caracteristicas);
console.log(crocodilo.descricaoVertebrado());

//getters e setters
// get utilizado para exibir o valor da propriedade
// set utilizado para modificar o falor da propriedade 
class PostBlog{
  constructor(titulo, descricao, tags) {
    this.titulo = titulo
    this.descricao=descricao
    this.tags=tags
  }
  get exibirTitulo() {
    return `Voce esta lendo ${this.titulo}`
  }

  set adicionandoTags(tags) {
    const tagsArray = tags.split(", ")
    this.tags=tagsArray
  }
}

const myPost = new PostBlog("Programação depois dos 30", "Esta postagem é sobre os desafios de se aprender a programar depois dos 30 ") 
console.log(myPost);
//utilizando o get
console.log(myPost.exibirTitulo);

//inserindo tags via setter 
myPost.adicionandoTags= "Programação, JavaScript, JS, Transição de carreira"

console.log(myPost);

//herança

class Mamiferos {
  constructor(patas) {
    this.patas = patas
  }
}

class Lobo extends Mamiferos {
  constructor(patas,nome) {
    super(patas, patas)
    this.nome=nome

  }
}

const shark = new Lobo(4, "Shark")
console.log(shark.nome+ " "+ shark.patas);

//instanceOf
//classe para classe 
//exemplo true
console.log(shark instanceof Lobo);
//exemplo false
console.log(Lobo instanceof Mamiferos);
// verifica se ha herança de objetos para classe e não apenas de classe para classe
console.log(new Lobo(4, "teste") instanceof Mamiferos); 
//completamente sem relaçao 
console.log(new PostBlog( "lkjhlkjh", " lkjghlkjhlkj ")instanceof Lobo);






