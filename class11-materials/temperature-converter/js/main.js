// //Write your pseduo code first!
// watch for button press on either celsius or farenheit Converter
document.querySelector('#cel').addEventListener('click',farF)
document.querySelector('#far').addEventListener('click',celF)

const temp = document.querySelector('#temp')
const outputField = document.querySelector('#outValue')

// create function for celsius conversion
// read value from temperature input
// run math to convert
// output to dom
function celF () {
  let calcC = temp.value
  calcC = (calcC - 32)*5/9
  // alert(calcC)
  outputField.innerText = calcC.toFixed(2)
}

// create function for farenheit conversion
// read value from temperature input
// run math to Convert
// output to dom
function farF () {
  let calcF = temp.value
  calcF = calcF * 9 / 5 + 32
  outputField.innerText = calcF.toFixed(2)
}
