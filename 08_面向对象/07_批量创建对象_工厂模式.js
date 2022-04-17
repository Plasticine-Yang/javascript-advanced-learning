function createPerson(name, age) {
  var person = new Object()

  person.name = name
  person.age = age

  person.eating = function () {
    console.log('eating...')
  }

  return person
}

var p1 = createPerson('张三', 20)
var p2 = createPerson('李四', 21)
var p3 = createPerson('王五', 22)
var p4 = createPerson('Plasticine', 23)

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

p1.eating()
p2.eating()
p3.eating()
p4.eating()

console.log(typeof p1)
