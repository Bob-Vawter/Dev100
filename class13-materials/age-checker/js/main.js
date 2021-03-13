// //Create a conditonal that checks their age
// let age = 16
// //If under 16, tell them they can not drive
// if (age < 16){
//   console.log("You can not drive")
// }
// //If under 18, tell them they can't hate from outside the club, because they can't even get in
// else if (age < 18) {
//   console.log("You can hate from outside the club, because.....")
// }
// //If under 21, tell them they can not drink
// else if (age < 21) {
//   console.log("You can't drink")
// }
// //If under 25, tell them they can not rent cars affordably
// else if (age < 25) {
//   console.log("Renting cars sucks for you")
// }
// //If under 30, tell them they can not rent fancy cars affordably
// else if (age < 30) {
//   console.log("Go rent a beater")
// }
// //If under over 30, tell them there is nothing left to look forward too
// else {
//   console.log("Just go wait for the Reaper")
// }

//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click',pAdd)
//Take the value from the input
//Place the result of the conditional in the paragraph
function pAdd () {
  let age = document.querySelector('#danceDanceRevolution').value
  //Create a conditonal that checks their age
  age = parseInt(age)
  let newPara = "Error"
  //If under 16, tell them they can not drive
  if (age < 16){
    newPara = "You can not drive"
  }
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  else if (age < 18) {
    newPara = "You can hate from outside the club, because....."
  }
  //If under 21, tell them they can not drink
  else if (age < 21) {
    newPara = "You can't drink"
  }
  //If under 25, tell them they can not rent cars affordably
  else if (age < 25) {
    newPara = "Renting cars sucks for you"
  }
  //If under 30, tell them they can not rent fancy cars affordably
  else if (age < 30) {
    newPara = "Go rent a beater"
  }
  //If under over 30, tell them there is nothing left to look forward too
  else {
    newPara = "Just go wait for the Reaper"
  }

  document.querySelector('p').innerText = newPara
}
