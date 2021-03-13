//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

let classDay = ['tuesday','thursday']
displayScreen = document.querySelector('#answer')

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('.btn').addEventListener('click',dayCheck)

function dayCheck() {
  day = document.querySelector('#whatDay').value.toLowerCase()
  house = document.querySelector('#whatHouse').value.toLowerCase()

  if(classDay.includes(day)){
    displayScreen.value = "You have class"
  } else if(day === "saturday") {
    displayScreen.value = "Office Hours"
  } else if(day === "friday" && house === "turing"){
    displayScreen.value = 'Private office hours'
  } else if(day === 'wednesday' && house === 'hopper'){
    displayScreen.value = 'Private office hours'
  } else if(day === 'monday' && house === 'hamilton'){
    displayScreen.value = 'Book a 1on1'
  } else {
    displayScreen.value = 'You need to study'
  }

}
