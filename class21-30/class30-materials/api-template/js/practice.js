document.querySelector('button').addEventListener('click',getDogo)
dogPhoto = document.querySelector('img')

async function getDogo() {
  const result = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await result.json()
  console.log(data.message)
  dogPhoto.src = data.message
}
