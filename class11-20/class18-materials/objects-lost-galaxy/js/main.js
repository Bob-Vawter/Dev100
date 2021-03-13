//Create a mouse object that has four properties and three methods
class Mouse {
  constructor(name, color) {
    this.name = name
    this.age
    this.color = color
    this.power = "Flight"
  }
  setAge(age) {
    this.age = age
  }
  tellAge() {
    console.log(this.age)
  }
  myName() {
    console.log(`My name is chica chica slim ${this.name}!`)
  }
}

let mickey = new Mouse("Mickey","Black")
mickey.setAge(50)
mickey.tellAge()
mickey.myName()
