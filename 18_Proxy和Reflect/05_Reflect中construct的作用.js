function Foo(name, age) {
  this.name = name
  this.age = age
}

function Bar() {}

const foo = Reflect.construct(Foo, ['plasticine', 20], Bar)
console.log(foo) // Bar { name: 'plasticine', age: 20 }
