//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
var a1 = [2,4,5,1,2]
alert (a1.reduce((acc,c)=>acc+c))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared (a) {
  return(a.forEach((item, i) => {
    a[i]=item*item
  }))
}

console.log(squared(a1))

// let newArr = arr.map(num => num**2)

//Create a function that takes string
//Print the reverse of that string to the console
var stringReverse = 'Hi my name is'

function strReverse(s) {
  return s.split('').reverse().join('')
}
console.log(strReverse(stringReverse))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome (s) {
  if(s===strReverse(s)){
    return true
  } else {
    return false
  }
}

console.log(palindrome('racecar'))
