// *Variables*
// Declare a variable, assign it a value, and alert the value
let num1 = 15
alert(num1)

// Create a variable, divide it by 10, and console log the value
num1 = num1/10
console.log(num1)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mult3 (n1,n2,n3) {
  alert(n1*n2*n3)
}
mult3(5,2,4)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function func4 (n1,n2,n3,n4) {
  console.log(n1 + n2 - n3 - n4)
}
func4(15,17,3,12)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function func3 (n1,n2,n3) {
  res = (100 + n1 - n2)/n3
  if(res > 25){
    console.log("We have a winna")
  }
}
func3(7,12,2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekend (day) {
  day = day.toLowerCase()
  let weekend = ["saturday","sunday"]
  let week = ["monday","tuesday","wednesday","thursday","friday"]
  if(weekend.includes(day)){
    alert("weekend")
  } else if(week.includes(day)){
    alert("week day")
  } else {
    alert("try again")
  }
}
weekend("saturday")
weekend("monday")
weekend("moday")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countBy3 (counter) {
  for(let i = 1;i<=counter;i+=3){
    console.log(i)
  }
}
countBy3(19)
