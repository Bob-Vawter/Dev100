//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter (n,h,w,win,lose) {
    this.name = n
    this.height = h
    this.weight = w
    this.wins = win
    this.loses = lose
    this.sayName = function () {
    console.log("My fighter name is " + this.name)
  }
    this.addWin = function () {
      this.wins ++
    }
    this.winCount = function () {
      console.log("I have " + this.wins + " wins!")
    }
}

let zangief = new streetFighter("Zangief","6'6","280",0,0)

zangief.sayName()
zangief.addWin()
zangief.addWin()
zangief.addWin()
zangief.winCount()
