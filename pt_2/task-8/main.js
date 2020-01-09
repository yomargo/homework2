var str = "Привет, Мир!"
var sum = 0

for(var i = 0; i < str.length; i++) {
  sum += str.charCodeAt(str[i])
}

console.log(sum)