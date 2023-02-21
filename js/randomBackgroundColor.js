
let header=document.getElementById('header')

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Set an interval to change the background color every 5 seconds
setInterval(() => {
  header.style.backgroundColor = getRandomRGB();
  console.log(header)
}, 1500);


// input user korte parie mouseleave er poriborte 

document.getElementById('change_colorBtn').addEventListener('input',function(){
  const colorCodeElement=document.getElementById('colorPicker')
  const  colorCode=colorCodeElement.value
  console.log(colorCode)
  document.body.style.backgroundColor=colorCode
})



function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 


  let cards=document.getElementsByClassName('randomColorChange')
  for(let card of cards){
    card.addEventListener('mouseenter',function(){
        card.style.box
        card.classList.add('myBoxShadow');
        card.style.backgroundColor = randomColor();
    })
   
    card.addEventListener('mouseleave',function(){
      card. classList.remove('myBoxShadow');
     
        card.style.backgroundColor = 'white';
    })
  }
 