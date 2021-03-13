//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const input = document.querySelector('input')
document.querySelector('button').addEventListener('click',getPicture)
input.addEventListener('keypress',e=>{
  if(e.key == 'Enter'){
    getPicture()
  }
})

function getPicture(){
  const choice = document.querySelector('input').value
  const video = document.querySelector('iframe')
  const name = document.querySelector('h2')
  const desc = document.querySelector('h3')
  const imgHold = document.querySelector('img')
  const url = 'https://api.nasa.gov/planetary/apod?api_key=LTl2XcvPWVhqBWUrbbsKrdvzruqVAmhpVqjk561W&date='+choice

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    if(data.media_type === 'image'){
      imgHold.src = data.hdurl
      imgHold.hidden=false
      video.hidden=true
    } else if (data.media_type ==='video'){
      video.src = data.url
      video.hidden=false
      imgHold.hidden=true
    } else {
      alert("Media Type Not Supported")
    }
    name.innerText = `Name: ${data.title}`
    desc.innerText = `Description: ${data.explanation}`
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}
