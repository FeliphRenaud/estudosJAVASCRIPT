let firstName = prompt('Digite o seu primeiro nome: ');
let lastName = prompt('Digite o seu sobrenome: ');
let age = prompt('Digite a sua idade: ') 
let newAge = parseInt(age) + 2

document.getElementById('greeting').innerHTML = firstName

console.log("meu nome é:" + firstName + ' ' + lastName);
console.log("minha idade é:" + newAge);