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
if (isAlive === true && hasBlackJack ===false) {


    console.log("drawing a new card from the deck!")
    let card = getRandomCard() //9
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

//CREATING AN OBJECT THAT REPRESENTS AN AIRBNB CASTLE LISTING
//let castleListing = {
//  luxuryCategory = true,
//  bedrooms = 6,
//  tipology = "castle",
//  amenities = ["A/C", "pool", "jacuzzi"]
//}
//console.log(castleListing.tipology)
// METHOD is a function attached to an object.like the case of console.log and many others
//object practise
let marti = {
  name: "Marti",
  age: 32,
  country: "Italy"
}
function logData() {
console.log(marti.name + " is" + " " + marti.age + " years old and lives in" + " " + marti.country)
}
logData()

// if statement practise
let age = 58
if (age < 6) {
  console.log("free")
} else if ( age < 18) {
  console.log("child discount")
} else if ( age < 27) {
  console.log("student discount")
} else if (age > 67) {
  console.log("senior discount")
} else  {
  console.log("full price")
}

// for loop practise
let largeCountries = ["china", "india","usa","indonesia","pakistan"]
for (let i = 0; i < largeCountries.length; i++) {
  console.log("-" +  largeCountries[i])
}

//push() pop() unshift() shift() practise
let largeCountries = ["tivalu", "india", "usa", "indnesia", "monaco"]
largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()
largeCountries.unshift("china")

//math. practise
let hands = ["rock", "paper", "scissor"]

function getRandom {
  let randomIndex = Mathh.floor(Math.random() * 3)
  return hands[randomIndex] // this way it returns not nubers but the words in strings
}
//dividere la frutta nello scaffale giusto - for loop + if statement + .textContent property // DIFFICILE
let fruit= ["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')
function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "apple") {
      appleShelf.textContent += "apple"
  } else if (fruit[i] === "orange") {
    orangeShelf.textContent += "orange"
  }

  }

}

// LOGICAL OPERATORS
//if (variable === true && variable1 === true) {
//}

//if (variable === true || variable1 === false) {
//  run the function // if at east oneof thecondition is true
//}


// random numbers
//let randomNumber = Math.random() // like this considers numbers from 0.000 to 0.999
//console.log(randomNumber)
//let randomNumber = Math.random() *6 // like this considers numbers from 0.000 to 5.999
//let flooredNumber = Math.floor() // remove the decimals
//let randomNumber = math.floor(Math.random()*6) // returns numbers from to 6, excluded, only integer numbers
// let randomNumber = Math.floor(Math.random()*6) + 1
// exercises
//function rollDice() {
//  let randomNumber = Math.floor(Math.random()*6) + 1
//  return randomNumber
//}
//console.log( rollDice() )

// arrays exercises

//index 0
//property .lenght counted normally

//arrays complex data type

//let Marti ["marti", 35, true] //string number and boolean

//adding or removing

//to add use property .push()

//let cards = [7,4]
//cards.push(6)
//console.log(cards)
//exercise
//let messages = [
//  "hey whats up"
//  "im cool thanks"
//  "doing great mate"
//]
//let newMessage = ["same here bro"]
//messages.push("newMessage") // the variable between brackets
//console.log(messages)
//Use splice() to remove arbitrary item.
//Use shift() to remove from beginning.
//Use pop() to remove from end.
//Using delete creates empty spots.
//Remember this.

//messages.pop()

//counting in JAVASCRIPT - creating a LOOP
//need to specify: where should we start counting?
//where is the finish line?
//what's the step size weshould use?
//code  START       FINISH      STEP SIZE
//for (let count = 1; count < 11; count +=1 ) {// COUNT IS A VERY COMMON VARIABLE - INSTEAD OF IT WE CAN USE i
//  console.log(count)
//}
//this means count from one to ten(before eleven) increasing one each interaction
//for (let i = 10; i <=100; i +=  10 ) {
//  console.log(i)
//}
//exercise
//let sentence = ["hello", "my", "name", "is", "per"]
//let greetingEl = document.getElementById('greeting-el')

//for (let i = 0; i < sentence.length; i++) {
//  greetingEl.textContent += sentence[i] + " " // space between words
//}
//this return the sentence divided in strings
