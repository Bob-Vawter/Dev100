// *Variables*
// Create a variable and alert log the value
var num1 = 25
alert(num1)
// Create a variable, add -15 to it, and print the value to the console
num1-=15
console.log(num1)

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function mult4 (n1,n2,n3,n4) {
  alert(n1*n2*n3*n4)
}
mult4(4,3,5,6)

// Create a function that divides one number by another and returns the remainder plus 10
function div2 (n1,n2) {
  return(n1%n2+10)
}
console.log(div2(15,4))

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function add3(n1,n2,n3) {
  bpNum = n1+n2+n3
  if(bpNum > 1000){
    alert("Block Party")
  }
}
add3(400,300,500)

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function div5 (n1,n2,n3,n4,n5) {
  testNum = n1,n2,n3,n4,n5
  if (testNum%3 === 0){
    alert("Lincoln")
  }
}
div5(30,1,1,1,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
function loopFunc (word,num){
  num = num*num*num
  for(let i = 0; i<num;i++){
    console.log(word)
  }
}
loopFunc ('why',3)
