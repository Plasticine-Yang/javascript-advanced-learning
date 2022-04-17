function Person(name, age) {
  this.name = name
  this.age = age
}

console.log(Object.getOwnPropertyDescriptors(Person.prototype))
console.log(Person.prototype.constructor)
