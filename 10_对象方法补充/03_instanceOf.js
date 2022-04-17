/**
 * 实现子类继承父类
 * @param {Function} SubConstructor 子类构造函数
 * @param {Function} ParentConstructor 父类构造函数
 */
function inheritPrototype(SubConstructor, ParentConstructor) {
  // 让子类构造函数通过原型继承父类的核心代码
  SubConstructor.prototype = Object.create(ParentConstructor.prototype)
  // 修改子类构造函数原型的 constructor 为自己的构造函数，让实例化的对象拥有正确的类型
  Object.defineProperty(SubConstructor.prototype, 'constructor', {
    value: SubConstructor,
    writable: true,
    configurable: true,
    enumerable: false,
  })
}

// 父类构造函数和方法
function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.eating = function () {
  console.log('父类方法 -- eating...')
}

// 子类构造函数和方法
function Son(name, age, habbit) {
  Parent.call(this, name, age)
  this.habbit = habbit
}

inheritPrototype(Son, Parent)

Son.prototype.playing = function () {
  console.log('子类方法 -- playing...')
}

var son = new Son('plasticine', 20, 'coding')

console.log(son instanceof Son) // true
console.log(son instanceof Parent) // true
