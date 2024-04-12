const simple = ['Green', 'Orange','Red', 'RGBA(133,122,200)', '#F150525']


const simpleText = document.querySelector('.simpleText')

const main = document.querySelector('.main')
const btn = document.querySelector('.btn')
const bgColor = document.querySelector('.bg-color')



btn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * simple.length)
  bg = simple[randomNumber]
  main.style.background = bg
  bgColor.textContent = bg 
})
