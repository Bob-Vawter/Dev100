//--- Easy
//create a variable and assign it a number
var num = 25

//minus 10 from that number
num -= 10

//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
var num2 = Number(document.querySelector('input').value)

//add 25 to that number
num2 += 25

//alert that number
alert(num2)

//--- Hard
//create a variable that holds the h1
var h1Hold = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1Hold.addEventListener('click',fillH1)

function fillH1(){
  h1Hold.innerHTML = num + num2
}
