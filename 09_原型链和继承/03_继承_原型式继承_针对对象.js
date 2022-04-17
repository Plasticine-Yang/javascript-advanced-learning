var father = {
  name: '父类对象',
}

/**
 * 创建一个对象，且这个对象的原型指向传入的对象 p 的原型
 * @param {object} p 父类对象
 */
function createObject(p) {
  function fn() {}

  fn.prototype = p
  return new fn()
}

var son1 = createObject(father)
console.log(Object.getPrototypeOf(son1)) // { name: '父类对象' }

/**
 * 创建一个对象，且这个对象的原型指向传入的对象 p 的原型 -- 使用 Object.setPrototypeOf
 * @param {object} p 父类对象
 */
function createObject2(p) {
  var obj = {}

  Object.setPrototypeOf(obj, p)
  return obj
}

var son2 = createObject2(father)
console.log(Object.getPrototypeOf(son2)) // { name: '父类对象' }

// 使用 Object.create -- 和上面的方式等价
var son3 = Object.create(father)
console.log(Object.getPrototypeOf(son3)) // { name: '父类对象' }
