//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function findUniq(arr) {
  let unique = arr[0]
  if (unique != arr[1] && unique != arr[2]){
    return unique
  } else {
    arr = arr.filter(num => num != unique)
    return arr
  }
}

console.log(findUniq([0,0,0,0,2,0,0]))
