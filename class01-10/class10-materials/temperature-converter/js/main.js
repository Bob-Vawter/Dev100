//Write your pseduo code first!
// get input from listener button press and call function
// define function
// convert from celius to farenheight
// ouput value to screen
//
//
document.querySelector('#calcCel').addEventListener('click',calculateC)
document.querySelector('#calcFar').addEventListener('click',calculateF)


function calculateF() {

  const temp = document.querySelector('#temp').value
  const calcTemp = temp * 9 / 5 + 32

  const returnValue = temp + ' degrees Celsius is ' + calcTemp.toFixed(2) + ' degrees Farenheit'

  document.querySelector('#outputValue').innerText = returnValue

}

function calculateC() {

  const temp = document.querySelector('#temp').value
  const calcTemp = (temp - 32) * (5 / 9 )

  const returnValue = temp + ' degrees Farenheit is ' + calcTemp.toFixed(2) + ' degrees Celsius'

  document.querySelector('#outputValue').innerText = returnValue

}
