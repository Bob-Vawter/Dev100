// //Make an api request using async await
// document.querySelector('button').addEventListener('click',getDogPhoto)
// const randomPic = document.querySelector('img')
//
// async function getDogPhoto () {
//   const result = await fetch ('https://dog.ceo/api/breeds/image/random')
//   const data = await result.json()
//   console.log(data.message)
//   randomPic.src = data.message
// }

document.querySelector('button').addEventListener('click',getDogo)
dogPhoto = document.querySelector('img')
dogBreed = document.querySelector('h2')

async function getDogo() {
  const result = await fetch('https://dog.ceo/api/breeds/image/random')
  // const result = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await result.json()
  console.log(data)
  var breedName = getBreed(data.message)
  dogPhoto.src = data.message
  dogBreed.innerHTML = breedName
}

function getBreed (res) {
  res = res.split('/')[4].split('-').reverse()
  res.forEach((word,i)=>{
    res[i]=word.charAt(0).toUpperCase()+word.slice(1)
  })
  res = res.join(' ')
  return res
}
