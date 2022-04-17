var obj = {
  name: 'plasticine',
  age: 20,
  _address: '广州市',
}

Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._address
  },
  set: function (value) {
    this._address = value
  },
})

/**
 * {
    name: 'plasticine',
    age: 20,
    _address: '广州市',
    address: [Getter/Setter]
    }
 */
console.log(obj)
console.log(obj.address) // 广州市
obj.address = '深圳市'
console.log(obj.address) // 深圳市

// 字面量定义属性 Getter/Setter
var obj1 = {
  name: 'obj1',
  _age: 20,
  get age() {
    return this._age
  },
  set age(value) {
    this._age = value
  },
}
obj1.age = 666
console.log(obj1.age) // 666
console.log(obj1._age) // 666
