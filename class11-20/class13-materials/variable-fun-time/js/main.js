//--- Easy
//create a variable and assign it a number
let num1 = 100

//minus 10 from that number
num1 -= 10

//print that number to the console
console.log(num1)

//--- Medium
//create a variable that holds a value from the input
let num2 = 0
document.querySelector('#danceDanceRevolution').addEventListener('mouseover',addInput)
//add 25 to that number
function addInput () {

  let addI = parseInt(document.querySelector('#danceDanceRevolution').value) + 25
  //alert that number
  alert(addI)
  num2 = addI
}

//--- Hard
//create a variable that holds the h1
const h1Listen = document.querySelector('#h1ID')

h1Listen.addEventListener('click',sum)
//add an event listener to that element that console logs the sum of the two previous variables
function sum() {
  console.log(parseInt(num1) + parseInt(num2))
}
