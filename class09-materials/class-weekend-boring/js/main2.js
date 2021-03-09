document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day.toLowerCase() == "sunday" || day.toLowerCase() =="saturday"){
    // alert("Happy Weekend")
    document.querySelector("#placeToSee").innerText = "Happy Weekend"

  } else if (day.toLowerCase() == "tuesday" || day.toLowerCase() == "thursday") {
    // alert("Get to work")
    document.querySelector("#placeToSee").innerText = "Time to study"

  } else {
    // alert("Must be a boring day")
    document.querySelector("#placeToSee").innerText = "Must be a boring day"
  }

}
