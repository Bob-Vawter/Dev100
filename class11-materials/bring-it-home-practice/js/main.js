// *Variables*
// Create a variable and console log the value
let testLog = "Variable Test Console Log"
console.log(testLog)

// Create a variable, add 10 to it, and alert the value
let addVar = 10
addVar += 10
alert(addVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFunc (n1, n2, n3, n4) {
  alert(n1-n2-n3-n4)
}
subFunc(12,-35,8,18)

// Create a function that divides one number by another and returns the remainder
function modFunc (n1, n2) {
  console.log(n1%n2)
}
modFunc(17,7)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji (n1,n2) {
  const num = n1+n2
  if (num > 50){
    alert("Jumanji")
  } else {
    console.log("Not Jumanji")
  }
}
jumanji(12,32)
jumanji(43,9)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multTre (n1,n2,n3) {
  const num = (n1*n2*n3)%3
  if(num === 0){
    alert("ZEBRA")
  } else {
    console.log("not a Zebra")
  }
}
multTre(5,2,4)
multTre(3,6,9)
