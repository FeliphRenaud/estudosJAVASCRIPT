// lista dinamica html 
let fruitList = ['Banana', 'Abacate', 'Kiwi', 'Maça', 'Cherry', 'Morango' ]
let numberList = document.getElementById('numberList') // 4º passo Criar a variavel que recebe os dados da lista e envia ao html 

for ( i = 0; i < fruitList.length; i++){
  let listItem = document.createElement('li') 
      // 1º passo: ListItem é a variavel que recebe as 'li's' do meu laço de repetição
  listItem.appendChild(document.createTextNode(fruitList[i]))
  //listItem.textContent = 'Item ' + i 
      // 2º passo adicionar o item na variavel que esta condicionada ao laço de repetição 
  numberList.appendChild(listItem) 
      // 3º passo introduzir os dados de listItem (variavel do laço de repetição) na variavel que sera exportada para o HTML
}