/* addEventListener */
// o sistema de eventos funciona por meio da escuta de eventos
// voce seleciona o elemento vai vai disparar o evento (EX: BOTÃO ENVIAR)
// e então ativa o evento via metodo
// neste metodo é declarado qual é o tipo de evento
// e então por meio de callbacks definimos o que acontece

const btn = document.querySelector("#my-button")
btn.addEventListener("click", function () {
  console.log("O botão foi clicado no html");
  
})
// para gerar um evento simples podemos utilizar funções anonimas
// porem para deletar ou alterar a funçcão deve ter nome proprio

/*REMOVENDO EVENTOS*/
const secondBtn = document.querySelector("#btn")
// crio a variavel e o link dela com o id do botão

function imiprimirMensagem() {
  console.log("Botão foi clicado");
}
// crio a função que executara o que é necessario naquele momento
secondBtn.addEventListener("click", imiprimirMensagem)
// gero e vento que executara a função associada a botão criado

//NESTE MOMENTO TEMOS UM BOTÃO FUNCIONAL
// para apagar a o evento
const thirdBtn = document.querySelector("#other-btn")
//crio o terceiro botão que sera responsavel por executar a função de exclusão
thirdBtn.addEventListener("click", () => {
  console.log("Evento Removido");
  secondBtn.removeEventListener("click", imiprimirMensagem)
})

/* Argumento do evento*/
const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.srcElement);// caiu em desuso e foi substituido por target
  console.log(e.offsetX);
  console.log(e.pointerType);
  console.log(e.target);
})
/* PROPAGAÇÃO*/
// as vezes um elemento pode ativar um evento que não deveria
// isso ocorre quando ele não é claramente definido
// para evitar que algo assim ocorra
// podemos utlizar o metodo stopPropagation
const containerBtn = document.querySelector("#btn-container")
const btnInside = document.querySelector("#div-btn")
containerBtn.addEventListener("click", () => {
  console.log("evento 1 btn-container");
  
})

btnInside.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("evento 2 div-btn");
  
})

/*preventDefault*/
//removendo evento padrão 
const a = document.querySelector("a")
a.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("cancelamos o redirecionamento via prevent default");
  
}) 
/* AÇÕES DE  TECLA KEYUP KEYDOWN */
document.addEventListener("keyup", (e) => {
  console.log(`soltou a tecla ${e.key}`);
  
})
document.addEventListener("keydown", (e) => {
  console.log(`apertou a tecla ${e.key}`);
  
})

//eventos de mouse 
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão ");
  
})

mouseEvents.addEventListener("mouseup", () => {
  console.log("soltou o botão ");
  
})

mouseEvents.addEventListener("dblclick", (e) => {
  e.stopPropagation()
  console.log("clique Duplo ");
  
})

//MOUSEMOVE

function mouseMove() {
  document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x ${e.x}`);
    console.log(`no eixo y ${e.y}`);
  })
}
//mouseMove()

/* EVENTOS POR SCROLL */
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px no eixo y");
    
  }
})

/* Evento de focus/blur */
const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
  
})

input.addEventListener("blur", (e) => {
  console.log("Saiu do input");
})

/*Eventos de carregamento de pagina */

window.addEventListener("load", () => {
  console.log("A pagina carregou ");
})

window.addEventListener("beforeunload", (e) => {
  e.preventDefault()
  return""

})

/* Debounce */
//isso poupa memoria do usuario

const debounce = (f, delay) => {
  let timeout
  return (...arguments)=>{
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout=setTimeout(() => {
      f.apply(arguments)
    }, delay);
  }
}

window.addEventListener("mousemove", debounce(() => {
  console.log("Executando a cada 400ms");
  
},400) )