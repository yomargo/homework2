var num = prompt("Type the number of hours")

while (isNaN(num)) {
  num = prompt("Please enter a valid number")
}

var secondsCount = num * 3600

alert("We have " + secondsCount + " seconds in " + num + " hours")