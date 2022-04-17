class Foo {
  constructor(name, age, address) {
    // 实例属性
    this.name = name
    this.age = age
    this._address = address
  }

  // getter
  get address() {
    return this._address
  }

  // setter
  set address(value) {
    this._address = value
  }

  // 静态属性
  static staticAttr = 'staticAttr'

  // 实例方法
  eating() {
    console.log('[instance method] Foo is eating...')
  }

  // 静态方法
  static playing() {
    console.log('[static method] Foo is playing...')
  }
}

var foo = new Foo('plasticine', 20, '广州市')

// 实例相关
console.log(foo.name) // 访问实例属性
console.log(foo.address) // 通过 getter 访问属性
foo.address = '深圳市' // 通过 setter 设置属性
console.log(foo.address)
foo.eating() // 调用实例方法

// 静态
console.log(Foo.staticAttr) // 访问类的静态属性
Foo.playing() // 调用静态方法
