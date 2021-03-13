//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let a1 = [3,4,5,345,2,1]
let sum = 0
a1.forEach((item, i) => {
    sum += item
});
alert(sum)
// sum = a1.reduce((acc,c)=>acc+c,0)
// array function simalar to forEach but done in one line

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArray (ar1) {
  ar1.forEach((item, i) => {
    ar1[i] = Math.pow(item,2)
  });
  return ar1
}
console.log(squaredArray(a1))

//Create a function that takes string
//Print the reverse of that string to the console
function stringReverse( str ) {
  let array = str.split('').reverse().join('')
  return(array)
}
console.log(stringReverse("help"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome ( str ) {
  let testy = false
  if(str===stringReverse(str)){
    testy = true
  }
  alert(testy)
}

palindrome ('racecar')
palindrome ('reviver')
palindrome ('test')
