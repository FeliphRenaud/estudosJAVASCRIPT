// modo 1

let note = parseFloat(prompt('Digite aqui a nota numerica: '));

note > 100 ? alert('Nota invalida'):
note >= 90 ? alert('Nota Obtida = A'):
note >= 80 ? alert('Nota Obtida = B'):
note >= 70 ? alert('Nota Obtida = C'):
note >= 60 ? alert('Nota Obtida = D'):
alert('Nota Obtidia = F');

// Modo 2
/*
let note = 0

note = parseFloat(prompt('Digite aqui a nota obtida: '));

if(note >100 ){
  alert( 'Nota Invalida')
}
else if ( note >=90 ){
  alert('Nota Obtida = A')
}
else if(note >= 80){
  alert('Nota Obtida = B')
}
else if(note >=70){
  alert('Nota Obtida = C')
}
else if(note >= 60){
  alert('Nota Obtida = D')
}
else{
  alert('Nota Obtida F')
}

*/