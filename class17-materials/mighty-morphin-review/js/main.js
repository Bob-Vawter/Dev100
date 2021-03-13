// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "Easter"
holiday = "Christmas"
holiday = holiday.toUpperCase()
console.log(holiday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = "Monkey Chunky"
console.log(lastThree.substring(lastThree.length-3,lastThree.length))
// alert(lastThree.slice(-3)) better way

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveN (n1,n2,n3,n4,n5) {
  let newN = 100-n1-n2-n3-n4-n5
  return Math.abs(newN)
}
console.log(fiveN(12,23,52,21,42))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeN (n1,n2,n3) {

  // Should have used Math.max, and Math.min
  let lowest = n1
  let highest = n1
  if (lowest > n2){
    lowest = n2
  } else if (lowest > n3){
    lowest = n3
  }
  if (highest < n2){
    highest = n2
  } else if (highest < n3){
    highest = n3
  }
  console.log(lowest + " " + highest)
}
threeN(12,-3,6)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headTails (){
  let flip = ["Heads","Tails"]
  let rando = 0
  rando = Math.floor(Math.random()*2)
  return flip[rando]
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipTimes (n) {
  for(let i = 0; i < n;i++){
    console.log(headTails())
  }
}

flipTimes(10)

function countFlips (n){
  let headCount = 0
  let tailCount = 0
  for (let i = 0;i<n;i++) {
    if("Heads" === headTails()){
      headCount ++
    } else {
      tailCount ++
    }
  }
  console.log ("Heads: " + headCount + " Tails: " + tailCount)
}

countFlips(8)
