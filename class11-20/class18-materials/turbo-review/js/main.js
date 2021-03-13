// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
var drink = "   Pepsi  "
drink = drink.trim()
console.log(drink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// var sentence = "This is a sentence that contains the word apple you know"
// var sentA = sentence.split(" ").map(String)
// var containApple
// sentA.forEach((item, i) => { if (item.toLowerCase() == "apple"){
//   containApple =true
// }
// });
// console.log(containApple)

let sentence = "This a af aldfj apple ladf lajf da"
let apple = sentence.search("apple")
let peach = sentence.search("peach")
if(apple != -1){
  console.log("Apple Found")
} else {
  console.log("Apple Lost")
}
if(peach != -1){
  console.log("Peach found")
} else {
  console.log("Peach Lost")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function tripleOG () {
  let hands = ''
  let rando = Math.floor(Math.random()*3)
  if(rando === 1){
    hands = "rock"
  } else if (rando === 2) {
    hands = 'paper'
  } else {
    hands = 'scissors'
  }
  return(hands)
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botThrow (pers){
  let bot = tripleOG()
  pers = pers.toLowerCase()
  if(bot === pers) {
    console.log("Tie")
  } else if (bot === 'rock' && pers === 'paper'){
    console.log("Person wins Paper beats Rock")
  } else if (bot === 'rock' && pers === 'scissors') {
    console.log("Bot wins Rock beats Scissors")
  } else if (bot === 'paper' && pers === 'scissors'){
    console.log("Person wins Scissors beats Paper")
  } else if (bot === 'paper' && pers === 'rock') {
    console.log("Bot wins Paper beats Rock")
  }else if (bot === 'scissors' && pers === 'rock'){
    console.log("Person wins Rock beats Scissors")
  } else {
    console.log("Bot wins Scissors beats Paper")
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playOff(a1){
  a1.forEach((item, i) => {
    botThrow(item)
  });
}

playOff(["Paper","paper","rock","scissors"])
