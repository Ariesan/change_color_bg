
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#00c9b7', 'coral', 'light green', 'aquamarine', 'yellow', 'pink', 'magenta', 'violet']

//Styling body bg
body.style.backgroundColor = '#6bd6df'
body.style.fontSize = '1.3em'

//styling btn
button.style.color = '#333'
button.style.backgroundColor = 'beige'
button.style.boxShadow = '5px 7px 10px rgba(0, 0, 0, 0.5)'
button.style.fontSize = '1.1em'
button.style.cursor = 'pointer'
button.style.borderRadius = '50%'
button.style.border = '1px solid white'
button.style.fontWeight = 'bold'
button.style.padding = '20px'

//Generate random color
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
