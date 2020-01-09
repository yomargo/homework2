var input = prompt("Type your number")
var num = parseInt(input)
var result = 0

if(input.substr(-1,1) === 'h') {
  result = num * 3600
} else if(input.substr(-1,1) === 'd') {
  result = num * 86400
} else if(input.substr(-1,1) === 'w'){
  result = num * 604800
} else if(input.substr(-1,1) === 'm'){
  result = num * 2592000
}

console.log(result)