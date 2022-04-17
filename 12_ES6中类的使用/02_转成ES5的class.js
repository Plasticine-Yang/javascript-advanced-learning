'use strict'

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  Object.defineProperty(Constructor, 'prototype', { writable: false })
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

var Foo = /*#__PURE__*/ (function () {
  function Foo(name, age, address) {
    _classCallCheck(this, Foo)

    // 实例属性
    this.name = name
    this.age = age
    this._address = address
  } // getter

  _createClass(
    Foo,
    [
      {
        key: 'address',
        get: function get() {
          return this._address
        }, // setter
        set: function set(value) {
          this._address = value
        }, // 静态属性
      },
      {
        key: 'eating',
        // 实例方法
        value: function eating() {
          console.log('[instance method] Foo is eating...')
        }, // 静态方法
      },
    ],
    [
      {
        key: 'playing',
        value: function playing() {
          console.log('[static method] Foo is playing...')
        },
      },
    ]
  )

  return Foo
})()

_defineProperty(Foo, 'staticAttr', 'staticAttr')

var foo = new Foo('plasticine', 20, '广州市') // 实例相关

console.log(foo.name) // 访问实例属性

console.log(foo.address) // 通过 getter 访问属性

foo.address = '深圳市' // 通过 setter 设置属性

console.log(foo.address)
foo.eating() // 调用实例方法
// 静态

console.log(Foo.staticAttr) // 访问类的静态属性

Foo.playing() // 调用静态方法
