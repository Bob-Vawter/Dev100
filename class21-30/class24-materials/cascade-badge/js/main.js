//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let party = ["Bulbasaur","Charmander","Squirtle","Pikachu"]
party.reverse()
console.log(party)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let arrayA = [2,4,5,3,5]
let arrayB = [3,2,3,9]

function compareArray (a1,a2) {
  let squareSum = 0
  let cubeSum = 0
  a1.forEach((item, i) => { squareSum += item**2 });
  a2.forEach((item, i) => { cubeSum += item**3});
  if (squareSum > cubeSum){
    return true
  } else {
    return false
  }
}
console.log(compareArray(arrayA,arrayB))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMultiple (a1) {
  let newArray = []
  a1.forEach((item, i) => {if(item%i===0){newArray.push(item)}});
  return newArray
}
let testArray = [22, -6, 32, 82, 9, 25]

console.log(indexMultiple(testArray))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let mixedArray = ['2',4,6,'2',6,'5']

function addArray (a1) {
  let sum = 0
  a1.forEach((item, i) => {sum += Number(item)});
  console.log(sum)
}
addArray(mixedArray)
