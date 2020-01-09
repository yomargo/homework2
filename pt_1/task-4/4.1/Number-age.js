var age = Number(prompt("Tell your age"))

var currentTime = new Date()
var currentYear = currentTime.getFullYear()
var bdYear = currentYear - age

alert(bdYear)