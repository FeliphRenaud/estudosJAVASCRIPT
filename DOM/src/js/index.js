// movendo-se pelo dom

console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// SELEÇÃO POR TAG
const listItens = document.getElementsByTagName("li")
console.log(listItens);
// SELEÇÃO POR ID 
const title = document.getElementById("title")
console.log(title);
// SELEÇÃO POR CLASSE 
const product = document.getElementsByClassName("product")
console.log(product);
// selecionando elementos por CSS

//ALL
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery);
// apenas um producto ou Just One 
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer);

//INSERT BEFORE
const p = document.createElement("p")
console.log(p);
const header = title.parentElement
console.log(header);
header.insertBefore(p, title)
console.log(header);
// APPENDCHILD
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)// cria a linha abaixo de contato na header-nav
li.textContent = " Inserindo LI de Historia"
const newLi = li

// REPLACECHILD
const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo"
header.replaceChild(h2, title) // troca o titulo original da pagina 
navLinks.replaceChild(li, newLi)

//CREATETEXTNODE

const myText = document.createTextNode("Agora vamos inserir mais um titulo")
console.log(myText);
const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3);
mainContainer.appendChild(h3)

const myComent = document.createTextNode("agora vamos inserir um comentario")
console.log(myComent);
const newP = document.createElement("p")
newP.appendChild(myComent)
console.log(newP);
mainContainer.appendChild(newP)
/* 
voce precisa inserir um comentario 
entao voce precisa abtrair o passo a passo
SENDO ASSIM: 
1 cria a variavel (myComent )que ira guardar seu comentar 
uma vez seu comentario dentro da variavel 
2 voce cria a tag html onde ira armazenar esse comentario 
no ultimo caso newP
3 então utilizando o appendChild voce armazena em <p> (newP) 
O conteudo da sua variavel de comentario (myComent)
4 com tudo isso pronto voce escolhe o melhor local para a inserção 
e então introduz isso no html neste caso em MainContainer

*/

// GETATTRIBUTE SETATTRIBUTE

const firstLink = navLinks.querySelector("a")
console.log(firstLink);
firstLink.setAttribute("href", "https://www.google.com")//mudei o link
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank")//implementei abertura em nova aba

// ALTURA E LARGURA

const footer = document.querySelector("footer")
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//GETCIENTBOUNDINGRECT
//ACESSA TODAS AS PROPRIEDADES DE UM ELEMENTO EXEMPLO EIXO X,Y

const product1 = product[0]
console.log(product1.getBoundingClientRect());
/*
{
    "x": 8,
    "y": 210.71875,
    "width": 217,
    "height": 64.90625,
    "top": 210.71875,
    "right": 225,
    "bottom": 275.625,
    "left": 8
}
*/

// CSS com JS 
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

//ALTERANDO STILOS DE VARIOS ELEMENTOS 
for (const li of listItens) {
  li.style.backgroundColor = "#333"
  li.style.color = "red"
  li.style.textDecoration="none"
}

