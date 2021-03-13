//Get a dog photo from the dog.ceo api and place the photo in the DOM
let image = document.querySelector('img')

fetch("https://dog.ceo/api/breed/hound/images")
  .then(res => res.json())  // parse response as json
  .then(data => {
    console.log(data)
    let rando = Math.floor(Math.random()*data.message.length)
    // console.log(rando)
    image.src = data.message[rando]
  })
  .catch(err => {
    console.log('error ${err}')
  })
