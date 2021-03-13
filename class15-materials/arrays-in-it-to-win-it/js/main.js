//Create an array of movies with at least three movies.
let movieList = ["T2","Aliens","The Thing","Independence Day","Avatar"]
//Using the array from above, store the first movie in a variable
let movie = movieList[2]
console.log(movie)

//Get the length of the original array and store it in a new variable
let movieCount = movieList.length
console.log(movieCount)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movieList[movieCount-1]
console.log(lastMovie)
