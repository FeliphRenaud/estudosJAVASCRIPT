// 1º passo Criar a logica que me trara numeros aleatorios para o jogo
let randomNumber = Math.floor( Math.random() * 100)
console.log(randomNumber);

let tries = 0

//2º passo criar uma função que recebe o numero digitado pelo usuario 
function checkGuess(){
  let guess = document.getElementById('guess').value
  tries ++
//3º Passo criara uma variavel que envia a mensagem de retorno 
  let message = document.getElementById('message')
  if(guess == randomNumber){
    message.innerHTML = 'Congratulations, you guessed the number in ' + tries + ' tries!'
  }else if (guess < randomNumber){
    message.innerHTML = ' Too low. Try again!'
  } else  {
    message.innerHTML = 'Too high. Try again!'
  }
}
//3º amarzenas em uma variavel o valor que foi digitado no input
//4º comparar com o numero que foi criado pela random