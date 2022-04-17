function Person(name, age) {
  this.name = name
  this.age = age
}

// bad way to add function
Person.prototype.fn1 = function () {
  //...
}
Person.prototype.fn2 = function () {
  //...
}
Person.prototype.fn3 = function () {
  //...
}
Person.prototype.fn4 = function () {
  //...
}

// good way
Person.prototype = {
  fn1: function () {
    // ...
  },
  fn2: function () {
    // ...
  },
  fn3: function () {
    // ...
  },
  fn4: function () {
    // ...
  },
}

// 一定要在重写函数原型对象后添加 constructor，否则重写的时候又将其覆盖了
Object.defineProperties(Person.prototype, {
  constructor: {
    value: Person,
    enumerable: false,
    configurable: true,
    writable: true,
  },
})

console.log(Person.prototype)
console.log(Object.getOwnPropertyDescriptors(Person.prototype))
