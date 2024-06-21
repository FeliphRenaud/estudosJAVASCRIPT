let colorList = []

for (let i = 1; i <= 3; i++ ){
  let userColor = prompt('Digite a cor ' + i + ' : ');
  colorList.push(userColor)
}

//alert('sua lista de cores ficou assim: ' + colorList)

document.getElementById('listacores').innerHTML = colorList