let firstCard = getRandomCard() // 16
let secondCard = getRandomCard() //7
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
console.log(sum)
let hasBlackJack = false
let isAlive = false
let message = ""
console.log(message)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById('cards-el')
//rename function but not changing that on html this way below
//create a function, getRandomCard(), that always returns the number 5 --> it goes to replace the number in card variables
let player = {    // this is an OBJECT
  name: "Marti",
  chips: 323
}
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
//  let randomNumber = Math.floor(Math.random()*13) + 1
  //return randomNumber; // use the word return
  let randomNumber = Math.floor(Math.random()*13) + 1 //return  Math.floor(Math.random()*13) + 1
  if (randomNumber === 1) { // if condition because 11/12/13 counts always 10 in blackack
    return 11
  } else if (randomNumber > 10) {
      return 10
    }
     else  {
      return randomNumber
    }
}
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let cards = [firstCard, secondCard]
  let sum = firstCard + secondCard
  renderGame()
}

  function renderGame() {
    cardsEl.textContent = "Cards: " //+ cards[0] + " " + cards[1]
    for (let i =0; i < cards.length; i++) { // i++ significa i +=1
        cardsEl.textContent += cards[i] + " "
      }
    sumEl.textContent = "Sum: " + sum

        if (sum <= 20) {
    message = "wanna draw a new card?"
  } else if (sum === 21) {
    message = "you got Blackjack!"
    hasBlackJack = true
  }  else {
    message = "u out of game!"
    isAlive = false

  }
messageEl.textContent = message
}

function newCard() {
if (isAlive === true && hasBlackJack === false) {


    console.log("drawing a new card from the deck!")
    let card = getRandomCard() //9
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
