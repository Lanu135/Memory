const cards = [
  {
    name: 'apple',
    img: './images/apple.jpg',
  },
  {
    name: 'bread',
    img: './images/bread.jpg',
  },
  {
    name: 'broccoli',
    img: './images/broccoli.jpg',
  },
  {
    name: 'coffee',
    img: './images/coffee.jpg',
  },
  {
    name: 'donut',
    img: './images/donut.jpg',
  },
  {
    name: 'meat',
    img: './images/meat.jpg',
  },
  {
    name: 'milk',
    img: './images/milk.jpg',
  },
  {
    name: 'pizza',
    img: './images/pizza.jpg',
  },
  {
    name: 'squit',
    img: './images/squit.jpg',
  },
]

cards.push(...cards)

cards.sort(() => 0.5 - Math.random())

const cardsBoard = document.querySelector('.cards-board')

function createBoard() {
  let i = 0
  cards.forEach((card) => {
    const img = document.createElement('img')
    img.setAttribute('src', './images/cards-bg.jpg')
    img.setAttribute('data-id', i)
    console.log(img)
    i++
    cardsBoard.appendChild(img)
  })
}

createBoard()
