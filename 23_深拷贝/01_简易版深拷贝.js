function deepClone(obj) {
  // base case
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  const newObj = new obj.constructor()
  for (const key in obj) {
    newObj[key] = deepClone(obj[key])
  }

  return newObj
}

// 如果是浅拷贝，修改 obj.info.address 后，也会修改掉 newObj.info.addres
// 因为浅拷贝对于引用数据类型拷贝的只是引用地址
const info = {
  address: '广州市',
  phone: '13798916602',
}
const obj = {
  name: 'plasticine',
  age: 20,
  info,
}

const newObj = deepClone(obj)

obj.info.address = '深圳市'

console.log(obj.info.address) // 深圳市
console.log(newObj.info.address) // 广州市

// 对于 Map、Set 和 RegExp 无效
// 1. Map
const refMapObj = new Map([
  ['refKey1', 'refValue1'],
  ['refKey2', 'refValue2'],
])
const mapObj = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', refMapObj],
])

const newMapObj = deepClone(mapObj)
console.log(newMapObj) // Map(0) {}

// 调用 Map 构造方法传入 mapObj 的拷贝仍然是浅拷贝
const newMapObj1 = new Map(mapObj)

mapObj.get('key3').delete('refKey2')

console.log(mapObj)
console.log(newMapObj1)
/** mapObj 和 newMapObj1 的输出
  Map(3) {
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => Map(1) { 'refKey1' => 'refValue1' }
  }
 */

// 2. Set
const refSetObj = new Set([6, 6, 6, 6, 6])
const setObj = new Set([1, 2, 3, 4, 5, refSetObj])

const newSetObj = deepClone(setObj)
console.log(newSetObj) // Set(0) {}

// 调用 Set 构造方法传入 setObj 的拷贝仍然是浅拷贝
const newSetObj1 = new Set(setObj)
refSetObj.delete(6)
console.log(setObj) // Set(6) { 1, 2, 3, 4, 5, Set(0) {} }
console.log(newSetObj1) // Set(6) { 1, 2, 3, 4, 5, Set(0) {} }

// 3. RegExp
const regExpObj = new RegExp('[a-z]')
const newRegExpObj = deepClone(regExpObj)
console.log(newRegExpObj) // /(?:)/
console.log(new RegExp(regExpObj)) // /[a-z]/
