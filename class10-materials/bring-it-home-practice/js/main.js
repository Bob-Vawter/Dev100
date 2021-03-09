// *Variables*
// Create a variable and console log the value
document.querySelector('#butt1').addEventListener('click',button1)
function button1 () {
  const var1 = "Create a variable and console log it"
  console.log(var1)
}
// Create a variable, add 10 to it, and alert the value
document.querySelector('#butt2').addEventListener('click',button2)
function button2 () {
  let var2 = 20
  var2 += 10
  alert(var2)
}
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
document.querySelector('#butt3').addEventListener('click',button3)
function button3 () {
  const num1 = document.querySelector('.subtract1').value
  const num2 = document.querySelector('.subtract2').value
  const num3 = document.querySelector('.subtract3').value
  const num4 = document.querySelector('.subtract4').value
  let numSub = num1 - num2 - num3 - num4
  alert(numSub)


//   fourNums.forEach((element) => {
//     numberOne = element.value
//     console.log(element)
//   });
// // if (numberOne == 0) {
//   alert('meh')
// } else {
//   alert(numberOne)
// }
}


// Create a function that divides one number by another and returns the remainder


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

document.querySelector('#butt5').addEventListener('click',button5)
function button5 () {
  const num1 = document.querySelector('.multiply1').value
  const num2 = document.querySelector('.multiply2').value
  const num3 = document.querySelector('.multiply3').value
  let numSub = num1 * num2 * num3
  if(numSub >= 50){
    alert("Jumanji " + numSub)
  } else {
    console.log("Roll again " + numSub)
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
