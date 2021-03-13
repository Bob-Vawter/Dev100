//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click',stopSnack)

function stopSnack () {
  let snackCount = Number(document.querySelector('input').value)
  // alert(snackCount)
  document.querySelector('#stops').innerText = ''
  let i = 0
  do {
    i += 1
    console.log(i)
    document.querySelector('#stops').innerText += ' Stop!'
  } while (i < snackCount)
}
