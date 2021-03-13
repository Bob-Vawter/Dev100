//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
// function ExpressoMachine(color,brand,model,age) {
//   this.color = color
//   this.brand = brand
//   this.model = model
//   this.age = age
//   this.stats = function () {
//     console.log(`Brand: ${this.brand} | Model: ${this.model} | Color: ${this.color} | Age: ${this.age}`)
//   }
//   this.brew = function () {
//     console.log("Coffee is now Brewing!")
//     this.complete()
//   }
//   this.complete = function () {
//     alert("Coffee is finished brewing enjoy!")
//   }
// }
class ExpressoMachine {
  constructor(color,brand,model,age) {
    this.color = color
    this.brand = brand
    this.model = model
    this.age = age
  }
  stats() {
    console.log(`Brand: ${this.brand} | Model: ${this.model} | Color: ${this.color} | Age: ${this.age}`)
  }
  brew() {
    console.log("Coffee is now Brewing!")
    this.complete()
  }
  complete() {
    alert("Coffee is finished brewing enjoy!")
  }
}


let newExpresso = new ExpressoMachine("Black","Starbucks","Cn1773",0)
newExpresso.stats()
newExpresso.brew()
