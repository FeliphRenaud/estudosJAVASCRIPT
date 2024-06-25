// criar um algoritimo que capta a idade do usuario 
// depois isso confirma se ele é ou não adulto 
// sem utilização de if | else ou recrutando funções no html

let checkButton = document.getElementById("checkButton")
let ageInput = document.getElementById('UserAge')

checkButton.addEventListener('click', function() {
  let age = ageInput.value 
  let message = (age >=18) ? 'You are and adult' : 'You are not and adult'
  alert(message)
  ageInput.value = ''
});