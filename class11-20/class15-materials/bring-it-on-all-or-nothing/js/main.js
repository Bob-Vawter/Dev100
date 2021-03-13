// *Variables*
// Declare a variable, assign it a boolean, and alert the value
var truthy = false
alert(truthy)

// Declare a variable, reassign it to your favorite color, and console log the value
var red
red = "blue"
console.log("The pen is Royal " + red)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNums (n1,n2,n3,n4) {
  return ((n1+n2+n3)/n4)
}
console.log("4+2+3 / 3 = " + fourNums(4,2,3,3))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function expoPower (n1,n2) {
  powerUp = 1
  if(n2 >=0 ){
    for(let i=0;i<n2;i++){
      powerUp *= n1
    }
  } else {
    n2 = n2*-1
    for(let i=0;i<n2;i++){
      powerUp *= n1
    }
    powerUp = 1 / powerUp
  }
  return powerUp
}
console.log("3 ^ 2 = " + expoPower(3,2))
console.log("3 ^ 0 = " + expoPower(3,0))
console.log("3 ^ 1 = " + expoPower(3,1))
console.log("3 ^ 12 = " + expoPower(3,12))
console.log("3 ^ -1 = " + expoPower(3,-1))
console.log("3 ^ -2 = " + expoPower(3,-2))

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function testy (boo,msg) {
  if(boo){
    alert(msg)
  } else {
    console.log(msg)
  }

// ternary operator -  boo ? alert(msg) : console.log(msg)

}
testy(true,"Lies")
testy(false,"Truth")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function threeFive(n1) {
  if(n1%5 === 0 && n1%3 === 0){
    console.log("fizzbuzz")
  } else if(n1%3 === 0){
    console.log("fizz")
  } else if(n1%5 === 0){
    console.log("buzz")
  } else {
    for (let i = 1; i<=n1; i++){
      console.log(i)
    }
  }
}

threeFive(6)
threeFive(69)
threeFive(12)
threeFive(15)
threeFive(22)
threeFive(20)
