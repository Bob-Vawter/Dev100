//Create a stopwatch object that has four properties and three methods
// properties, minutes, seconds, miliseconds, hours
// start, stop, reset
let stopwatch = {}
stopwatch.miliseconds = 30
stopwatch.seconds = 40
stopwatch.minutes = 50
stopwatch.hours = 10

stopwatch.reset = function () {
  stopwatch.seconds = 0
  stopwatch.miliseconds = 0
  stopwatch.hours = 0
  stopwatch.minutes = 0
}
stopwatch.setMinute = function () {
  stopwatch.minutes = 10
}
stopwatch.time = function () {
  console.log("Current time: " + stopwatch.hours + ":" + stopwatch.minutes + ":" + stopwatch.seconds + ":" + stopwatch.miliseconds)
}
