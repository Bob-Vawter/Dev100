//--- Easy
//create a variable and assign it a boolean
var truthy = false;

//create a variable and assign it a string that is a number
let num1 = "1"

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
let num2 = parseInt(num1) + 10

//print that number to the console
console.log(num2)

//--- Medium
//create a variable that holds a value from the input
let num3 = Number(document.querySelector('input').value)

//add 21 to that number
num3 += 21

//alert that number
alert(num3)

//--- Hard
//create a variable that holds the h1
let h1hold = document.querySelector('h1').innerText

//add an event listener to that element that places the product of the two previous variables in the DOM
document.querySelector('h1').addEventListener('mouseover',combine)

function combine (){
document.querySelector('#needSomeTLC').innerText = (num2 * num3)
}
