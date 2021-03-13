// *Variables*
// Create a variable and console log the value
let num = 12
console.log(num)
// Create a variable, add 10 to it, and alert the value
let num2 = Number(num) + 12
alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4 (n1,n2,n3,n4) {
  alert(n1-n2-n3-n4)
}
sub4(100,50,25,21)
// Create a function that divides one number by another and returns the remainder
function div2 (n1,n2) {
  console.log(n1%n2)
}
div2 (15,7)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2 (n1,n2) {
  let res = Number(n1) + n2
  if ( res > 50) {
    alert("Jumanji")
  }
}
add2(32,19)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function div3 (n1,n2,n3) {
  let res = n1*n2*n3
  if (res%3 === 0){
    alert("ZEBRA")
  }
}
div3 (3,5,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWord (word,num) {
  for (let i = 0; i<num; i++){
    console.log(word)
  }
}
logWord("six",6)
