//Get a dog photo from the dog.ceo api and place the photo in the DOM
let imageHold = document.querySelector('img')

fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
  .then(data =>imageHold.src=(data.message));
