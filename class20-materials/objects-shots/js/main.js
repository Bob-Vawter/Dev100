//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const image = document.querySelector('img')
const drink = document.querySelector('input')
const name = document.querySelector('span')
const ingredients = document.querySelector('p')
document.querySelector('.btn').addEventListener('click', function(){findDrink("search.php?s=" + drink.value)})
document.querySelector('.rdm').addEventListener('click', function(){findDrink("random.php")})
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      findDrink("search.php?s="+drink.value)
    }
  })

function findDrink (keyword) {
  // let keyword = drink.value
  fetch("https://www.thecocktaildb.com/api/json/v1/1/" + keyword)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    index=(Math.floor(Math.random()*data.drinks.length))
    // index=0
    name.innerHTML = data.drinks[index].strDrink
    image.src = data.drinks[index].strDrinkThumb
    ingredients.innerHTML = data.drinks[index].strInstructions
  })
  .catch(error => {
    alert("Drink Not Found")
  })
}

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(res => res.json())
.then(data => {
  console.log(data)
})
