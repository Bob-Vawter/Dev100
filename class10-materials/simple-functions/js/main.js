const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')

//create a function that adds two numbers and alerts the sum
document.querySelector('#addButt').addEventListener('click',addition)
function addition() {
  //added a 1 * numvalue to force as integer was concat before
  document.querySelector('.returnValue').innerText = parseInt(num1.value) + parseInt(num2.value)
}
//create a function that multiplys three numbers and console logs the product
document.querySelector('#multButt').addEventListener('click',multiply)
function multiply() {
  document.querySelector('.returnValue').innerText = num1.value * num2.value
}
//create a function that divides two numbers and returns the ???
document.querySelector('#divButt').addEventListener('click',divide)
function divide() {
  document.querySelector('.returnValue').innerText = (num1.value / num2.value).toFixed(2)
}
