//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)
// document.querySelector('.formSubmit').addEventListener('submit', check)
// attempted to get on form Enter hit

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  const weekend = ["saturday",'sunday']
  const workNight = ['tuesday','thursday']


  if(workNight.includes(day)){
    document.querySelector('#placeToSee').innerText = "Time to Work"
  }else if( weekend.includes(day)){
    document.querySelector('#placeToSee').innerText = "Its The Weekend"
  }else if( day === 'wednesday') {
    document.querySelector('#placeToSee').innerText = "Halfwayday!"
  }else {
    document.querySelector('#placeToSee').innerText = "Boring!"
  }

}
