//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click',stopSnack)

function stopSnack () {
  let numRun = Number(document.querySelector('input').value)
  document.querySelector('#stops').innerText = ""
  for(let i = 0; i < numRun; i++){
    document.querySelector('#stops').innerText += " Stop"
  }
}
