var num = Number(prompt("Type your number"))

if (isNaN(num)) {
  alert("Please enter a valid number")
} 

if (num % 2 == 0) {
  alert("The number is even")
} else {
  alert("The number is odd")
}