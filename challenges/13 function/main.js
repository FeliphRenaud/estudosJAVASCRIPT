
function changeBackGroundColor(){
  let colors = ['red','pink','blue','yellow', 'green', 'orange', 'brown', 'darkgrey', 'grey', 'black', 'purple']
  
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
};