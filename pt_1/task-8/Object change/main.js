var person = {
  name: "Margo",
  age: 19,
  height: 162
}

var sweater = {
  color: "red",
  material: "coton"
}

person.name = "another name"
person["age"] = 20
person.height = 122

sweater.color = "black"
sweater["material"] = "wool"

console.log(person, sweater)