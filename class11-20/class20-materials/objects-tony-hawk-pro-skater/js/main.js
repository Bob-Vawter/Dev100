//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

class TonyHawk {
  constructor(name) {
    this.name = name
    this.skateboard
    this.moveset = []
    this.wins = 0
  }
  myName() {
    console.log(`My name is ${this.name}.`)
  }
  setName(name) {
    this.name = name
  }
  moveAdd(move) {
    this.moveset.push(move)
    console.log(this.moveset)
  }
}

let tony = new TonyHawk('tony')
tony.myName()
tony.setName('Tony Hawk')
tony.myName()
tony.moveAdd('Kick Flip')
