// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
var sent = "You are starting to get this, you da man "
console.log(sent)
console.log(`Hey I said ${sent.repeat(2)}!`)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
var arr = ['b','a','d',' ','b','o','y']
alert(`I've been a ${arr.join('')}!`)

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rpsls (){
  let rando = Math.random()
  let result = ''
  result = rando < .20 ? 'rock' : (rando < .40 ? 'paper':(rando<.6?'scissors':(rando<.8?'lizard':'spock')))
  return result
}
console.log(rpsls())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

function rpslsWin (c){
  let bc = rpsls()
  let result = ''
  result = (bc==c)?'ties':((bc == 'rock' && c == 'paper' || bc == 'rock' && c =='spock' || bc == 'paper' && c == 'scissors' || bc == 'paper' && c == 'lizard' || bc == 'scissors' && c == 'rock' || bc == 'scissors' && c =='spock' || bc == 'lizard' && c == 'rock' || bc == 'lizard' && c =='scissors' || bc == 'spock' && c == 'paper' || bc == 'spock' && c =='lizard')?'loses to':'beats')

  console.log(`Bots ${bc} ${result} your ${c}!`)
}

rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
rpslsWin(rpsls())
