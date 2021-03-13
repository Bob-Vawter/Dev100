// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function arrayDiff(a, b) {
  let arrayD =[]
  a.forEach((item, i) => {if (!(b.includes(item))){arrayD.push(item)}});
  return arrayD
}

let a1 = [1,3,4,6,23,42,4,2,3,52,3,34,12,3,4]
let b1 = [3,2,5,213,3,23,4]

console.log(arrayDiff(a1,b1))
//code wars above

function hiBye (a1) {
  let first=a1[0]
  let last=a1[a1.length-1]
  if (first < last){
    alert('Hi')
  } else if(last < first) {
    alert('Bye')
  } else {
    alert('We close in an hour')
  }
}

let t1 = [12,2,3,4,12]
let t2 = [12,2,3,4,1]
let t3 = [12,2,3,4,121]

hiBye(t1)
hiBye(t2)
hiBye(t3)
