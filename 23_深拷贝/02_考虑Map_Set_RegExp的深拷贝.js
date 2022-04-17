function deepClone(obj) {
  // base case
  if (!obj || typeof obj !== 'object') {
    return obj
  }
  // Map、Set 和 RegExp 的 base case
  // 直接调用构造函数然后传入对象是浅拷贝
  if (obj instanceof Map) {
    // Map 对象 -- 遍历每一个 key 然后 set 到新的 Map 对象中
    const newMapObj = new Map()
    obj.forEach((item, key) => {
      newMapObj.set(key, deepClone(item))
    })

    return newMapObj
  } else if (obj instanceof Set) {
    // Set 对象 -- 遍历每一项然后 add 到新的 Set 对象中
    const newSetObj = new Set()
    obj.forEach((item) => {
      newSetObj.add(deepClone(item))
    })

    return newSetObj
  } else if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  const newObj = new obj.constructor()
  for (const key in obj) {
    newObj[key] = deepClone(obj[key])
  }

  return newObj
}

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

// 删除引用 Map 对象的一个 key，如果是深拷贝，则 newMapObj 中不会有影响
refMapObj.delete('refKey2')

console.log(newMapObj)
/** newMapObj
  Map(3) {
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => Map(2) { 'refKey1' => 'refValue1', 'refKey2' => 'refValue2' }
  }
 */

// 2. Set
const refSetObj = new Set([6, 6, 6, 6, 6])
const setObj = new Set([1, 2, 3, 4, 5, refSetObj])

const newSetObj = deepClone(setObj)

// 删除引用 Set 对象的数据，如果是深拷贝，则 newSetObj 中不会有影响
refSetObj.delete(6)

console.log(newSetObj) // Set(6) { 1, 2, 3, 4, 5, Set(1) { 6 } }

// 3. RegExp
const regExpObj = new RegExp('[a-z]')
const newRegExpObj = deepClone(regExpObj)
console.log(newRegExpObj) // /[a-z]/
