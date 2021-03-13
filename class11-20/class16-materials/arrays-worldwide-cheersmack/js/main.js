//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function buildArray (num) {
  let arrayNums = []
  for(let i = 1; i<=num;i++){
    arrayNums.push(i)
  }
  return arrayNums
}

document.querySelector('h2').innerText = buildArray(12)
