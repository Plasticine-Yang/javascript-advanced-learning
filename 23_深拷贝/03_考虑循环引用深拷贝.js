function deepClone(obj) {
  // base case
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  // 缓存 -- 已存在的直接返回，避免循环引用的深拷贝无线递归
  // 利用函数本身也是缓存的特性，将缓存对象放到函数对象中，这样每次递归都能取到之前的缓存对象
  let cache = null
  if (!deepClone.cache) {
    // 初始化缓存对象
    deepClone.cache = new WeakMap()
  }
  cache = deepClone.cache

  // 缓存命中 -- 直接返回
  if (cache.has(obj)) return cache.get(obj)

  // Map、Set 和 RegExp 的 base case
  // 直接调用构造函数然后传入对象是浅拷贝
  if (obj instanceof Map) {
    // Map 对象 -- 遍历每一个 key 然后 set 到新的 Map 对象中
    const newMapObj = new Map()
    // 存入缓存中
    cache.set(obj, newMapObj)
    obj.forEach((item, key) => {
      newMapObj.set(key, deepClone(item))
    })

    return newMapObj
  } else if (obj instanceof Set) {
    // Set 对象 -- 遍历每一项然后 add 到新的 Set 对象中
    const newSetObj = new Set()
    // 存入缓存中
    cache.set(obj, newSetObj)

    obj.forEach((item) => {
      newSetObj.add(deepClone(item))
    })

    return newSetObj
  } else if (obj instanceof RegExp) {
    const newRegExpObj = new RegExp(obj)
    // 存入缓存中
    cache.set(obj, newRegExpObj)

    return newRegExpObj
  }

  const newObj = new obj.constructor()
  // 存入缓存中
  cache.set(obj, newObj)

  for (const key in obj) {
    newObj[key] = deepClone(obj[key])
  }

  return newObj
}

// 循环引用的深拷贝
const obj1 = {
  name: 'plasticine',
  age: 20,
}
const obj2 = {
  address: '广州市',
  phone: '13798916602',
  circular: obj1,
}
obj1.circular = obj2

const newObj = deepClone(obj1)
console.log(newObj)

/** newObj
  <ref *1> {
    name: 'plasticine',
    age: 20,
    circular: { address: '广州市', phone: '13798916602', circular: [Circular *1] }
  }
 */
