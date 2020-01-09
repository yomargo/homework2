var str = "abcde"

alert(str[0] + str[1] + str[4])

for(var i = 0; i < str.length; i++) {
  if (str[i] === "a" || str[i] === "b" || str[i] === "e") {
    console.log("I know this letter")
  }
}