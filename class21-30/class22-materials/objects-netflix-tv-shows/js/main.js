//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class netflixShow {
  constructor(name,category,rating,numOfEp) {
    this.show = name
    this.category = category
    this.rating = rating
    this.episodes = numOfEp
  }
  setRating(stars){
    this.rating = stars
  }
  getRating(){
    console.log(`The show ${this.show} is rated ${this.rating} stars.`)
  }
  playShow(){
    console.log(`${this.show} now playing.`)
  }
}

let batman = new netflixShow('Batman Beyond', `Animated`, 5, 105)
batman.getRating()
batman.playShow()
