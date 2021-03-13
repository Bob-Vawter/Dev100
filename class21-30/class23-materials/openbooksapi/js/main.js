// //Example fetch using pokemonapi.co
if(!localStorage.getItem('myBook')){
  localStorage.setItem('myBook','Bob')
}

document.querySelector('button').addEventListener('click', getFetch)
//
// function getFetch(){
//   const choice = document.querySelector('input').value

function getFetch(){

const choice = document.querySelector('input').value

const url = `https://openlibrary.org/isbn/${choice}.json`

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  // console.log(data)
  localStorage.setItem('myBook',localStorage.getItem('myBook') + ', ' + data.title)
})
.catch(err => {
  console.log(`error ${err}`)
});
console.log(localStorage.getItem('myBook'))
}
