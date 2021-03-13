// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood
favoriteFood = 'pizza'
alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
var testString = "aoasdif"
alert(testString.substr(1,1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function treNums (n1,n2,n3) {
  alert(n1/n2*n3)
}
treNums(5,12,3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot (n1) {
  let cubeRoot = Math.pow(n1,1/3)
  console.log(cubeRoot)
}
cubeRoot(8)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month){
  let summer = ['june','july','august']
  summer.includes(month.toLowerCase()) ? alert("YAY") : alert("Booo")
}
summer("july")
summer('october')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFives(n1) {
  for(let i = 0; i<n1;i++){
    (i%5 === 0) ? console.log() : console.log(i)
  }
}
skipFives(23)
