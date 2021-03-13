//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
document.querySelector('h1').addEventListener('click',resolution)

function resolution() {
  shoutOut = " " + document.querySelector('#resolution').value
  for(let i = 0;i<365;i++){
    console.log(shoutOut)
    document.querySelector('h2').innerText += shoutOut
  }
}
//Bonus can you make it print your resolution 365 times to the DOM?
