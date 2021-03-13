//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenOnly (a1) {
  let evenSteven = []
  for(let i = 0;i<a1.length;i++){
    if(a1[i] % 2 === 0){
      evenSteven.push(a1[i])
    }
  }
  console.log("func: " + evenSteven)
}

let testArray = [2,5,3,4,5,6,7,8,3,5,3,4]

console.log("filter: " + testArray.filter(number => number%2 === 0))
// console.log("filter: " + evenArray)
evenOnly(testArray)
