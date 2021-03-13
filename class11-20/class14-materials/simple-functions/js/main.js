//---Easy
//create a function that adds two numbers and alerts the difference
function addEasy(n1,n2) {
  alert(n1+n2)
}
addEasy(3,4)

//create a function that divides two numbers and console logs the quotient
function divEasy(n1,n2) {
  console.log(n1/n2)
}
divEasy(15,3)

//create a function that multiplys four numbers and returns the product
function multEasy(n1,n2,n3,n4) {
  console.log(n1*n2*n3*n4)
}
multEasy(.5,3,2,4)

//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers
function mediumFunc(n1,n2,n3,n4) {
  console.log((n1+n2)/(n3-n4))
}
mediumFunc(1,5,6,3)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardFunc(n1,n2,n3,n4) {
  let firstTwo = n1*n2
  if (firstTwo > 100) {
    console.log(firstTwo)
  } else if (firstTwo < 100){
    console.log(firstTwo - (n3/n4))
  } else {
    alert ((n1*n2*n3)%n4)
  }
}

hardFunc(3,75,12,6)
hardFunc(2,15,9,3)
hardFunc(2,50,1,23)
