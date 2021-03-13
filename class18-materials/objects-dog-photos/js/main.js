//Get a dog photo from the dog.ceo api and place the photo in the DOM
const imgHolder = document.querySelector('img')

fetch('https://dog.ceo/api/breeds/image/random').then(response =>{return response.json()}).then(data => {imgHolder.src = data.message})
