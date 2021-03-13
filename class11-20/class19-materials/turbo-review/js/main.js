// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "Hi who are you?"

if(sentence.charAt(sentence.length-1)=='?'){
  alert("It's a trap")
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let var2 = "He is a great jr. dev isn't he! What kind of jr. dev are you hiring?"
var2 = var2.replaceAll("jr. dev","software engineer")

console.log(var2)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps () {
  rando = Math.random()
  if(rando < .3333){
    return "rock"
  } else if(rando < .6666){
    return "paper"
  } else {
    return "scissor"
  }
}

console.log(rps())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function bot (thrown) {
  botThrow = rps()
  if (botThrow == thrown){
    return("tie")
  } else if ((botThrow == "rock" && thrown == "paper") || (botThrow == "paper" && thrown == "scissor") || (botThrow == "scissor" && thrown == "rock")) {
    return "you win"
  } else {
    return "bot wins"
  }
}

// console.log(bot("rock"))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playGamerps (a) {
  a.forEach((item, i) => {
    console.log(bot(item))
  });
}

playGamerps(['rock','paper','paper','scissor'])
