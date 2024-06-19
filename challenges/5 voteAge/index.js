let idade = prompt('Digite a sua idade: ');
let temTitulo = prompt('Possui titulo de eleitor ?(RESPONDA COM : sim OU não)');
let idadeMinima = 18

if(idade >= idadeMinima && temTitulo == 'sim'){
  console.log('Voce pode votar');
  alert('Pode Votar');
}else if( idade >= idadeMinima && temTitulo =='não'){
  console.log('Voce precisa fazer seu titulo de eleitor ');
  alert('Prcure o TRE da sua cidade')
}else{
  console.log('Não pode votar ');
  alert('Voce não pode votar')
}