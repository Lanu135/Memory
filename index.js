const cards = [
  {
    name: 'apple',
    src: './images/apple.jpg',
    alt: 'apple',
    isFlipped: false,
  },
  {
    name: 'bread',
    src: './images/bread.jpg',
    alt: 'bread',
    isFlipped: false,
  },
  {
    name: 'broccoli',
    src: './images/broccoli.jpg',
    alt: 'broccoli',
    isFlipped: false,
  },
  {
    name: 'coffee',
    src: './images/coffee.jpg',
    alt: 'coffee',
    isFlipped: false,
  },
  {
    name: 'donut',
    src: './images/donut.jpg',
    alt: 'donut',
    isFlipped: false,
  },
  {
    name: 'meat',
    src: './images/meat.jpg',
    alt: 'meat',
    isFlipped: false,
  },
  {
    name: 'milk',
    src: './images/milk.jpg',
    alt: 'milk',
    isFlipped: false,
  },
  {
    name: 'pizza',
    src: './images/pizza.jpg',
    alt: 'pizza',
    isFlipped: false,
  },
  {
    name: 'squit',
    src: './images/squit.jpg',
    alt: 'squit',
    isFlipped: false,
  },
  {
    name: 'peanut',
    src: './images/peanut.jpg',
    alt: 'peanut',
    isFlipped: false,
  },
]

cards.push(...cards)

cards.sort(() => 0.5 - Math.random())

const cardsBoard = document.querySelector('.cards-board')
let score = 0

const chosenCards = []
const chosenCardsIds = []

function createBoard() {
  let i = 0
  cards.forEach((card) => {
    const img = document.createElement('img')
    img.setAttribute('src', './images/cards-bg.jpg')
    img.setAttribute('data-id', i)
    i++
    img.addEventListener('click', flipCard)
    cardsBoard.appendChild(img)
  })
}

createBoard()

// flips the cards and put the flipped Cards into a new array
function flipCard() {
  const cardId = this.getAttribute('data-id')
  this.setAttribute('src', cards[cardId].src)
  chosenCards.push(cards[cardId].name)
  chosenCardsIds.push(cardId)
  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

function checkMatch() {
  const scoreElement = document.getElementById('score')
  const img = document.querySelectorAll('img')
  if (chosenCardsIds[0] === chosenCardsIds[1]) {
    alert('You clicked the same card, please choose two different')
    img[chosenCardsIds[0]].setAttribute('src', './images/cards-bg.jpg')
    img[chosenCardsIds[1]].setAttribute('src', './images/cards-bg.jpg')
    chosenCards.splice(0, 2)
    chosenCardsIds.splice(0, 2)
  } else if (chosenCards[0] == chosenCards[1]) {
    score++
    scoreElement.innerText = score
    // cannot be added to the chosenCards Array and cursor we be set to default
    chosenCardsIds.forEach((id) => {
      img[id].removeEventListener('click', flipCard)
      img[id].setAttribute('src', './images/clear.jpeg')
      img[id].style.cursor = 'default'
      img[id].style.border = 'none'
    })
  } else {
    // flip back the card if is not a match
    chosenCardsIds.forEach((id) => {
      setTimeout(() => {
        img[id].setAttribute('src', './images/cards-bg.jpg')
      }, 1000)
    })
  }
  chosenCards.splice(0, 2)
  chosenCardsIds.splice(0, 2)
}
