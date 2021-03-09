document.querySelector("#check").addEventListener('click',dayWeek)

function dayWeek() {

  const day = document.querySelector("#day").value.toLowerCase()
  const weekend = ["sunday","saturday"]
  const worknight = ["tuesday","thursday"]

  if (weekend.includes(day) ){
    document.querySelector("#placeToSee").innerText = "Weekend"
  } else if (worknight.includes(day)){
    document.querySelector("#placeToSee").innerText = "Worknight"
  } else {
    document.querySelector("#placeToSee").innerText = "Boring"
  }


}
