//Create an array of movie titles. Loop through the array and each element to the h2.
let movieList = ["T2","Aliens","The Thing","Independence Day","Avatar"]
for(let i=0;i<movieList.length;i++){
  document.querySelector('h2').innerText += " " + movieList[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numberList = [2,5,21,423,3,1,53,2,3,5,6]
for(let i=0;i<numberList.length;i++){
  numberList[i] += 3
}
console.log(numberList)

//Find the average of all the numbers from question three
let average = 0
for(let i=0;i<numberList.length;i++){
  average += numberList[i]
}
average /= numberList.length
console.log(average)


//Create an array of movie titles. Loop through the array and each element to the h2.
var movies = ["Bring it on","Lion King","Harry Potter","Prometheus"]
movies.forEach((x,i) => document.querySelector('h2').innerText += " " + x)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
var numbies = [3,24,4,5234,1]
numbies.forEach((x,i)=> numbies[i] += 3)
console.log(numbies)

//Find the average of all the numbers from question three
let averageJoe = 0
numbies.forEach((x,i)=> averageJoe+=x)
console.log(averageJoe/numbies.length)
