//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['ateam', 'star trek', 'dr who']
shows.forEach((item, i) => {console.log(item)})

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
var numbies = [1,2,3,41,3,12,3123,4,123,411,13]
var evens = []
numbies.forEach(item => {if(item%2 === 0){evens.push(item)}})

console.log(evens)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondA (a1) {
  a1.sort(function(a,b){return a-b})
  alert(a1 + " " + (a1[1] + a1[a1.length-2]))
}

secondA(numbies)
