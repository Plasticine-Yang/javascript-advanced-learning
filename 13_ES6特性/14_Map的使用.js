// 1. Map 的创建

// 创建一个空 Map 对象，然后用 set 方法添加元素
const map1 = new Map()
map1.set('haha', 'hehe')
map1.set({ a: 'a' }, 'asd')

// 构造方法中直接添加元素
const map2 = new Map([
  ['haha', 'hehe'],
  [{ a: 'a' }, 'asd'],
])

console.log(map1) // Map(2) { 'haha' => 'hehe', { a: 'a' } => 'asd' }
console.log(map2) // Map(2) { 'haha' => 'hehe', { a: 'a' } => 'asd' }

// 2. Map 的遍历

const map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

// 使用 forEach
map.forEach((value, key, map) => {
  console.log(value, key, map)
})

/**
  value1 key1 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
  value2 key2 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
  value3 key3 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
 */

// 使用 for of 循环
for (const item of map) {
  console.log(item)
}

/**
  [ 'key1', 'value1' ]
  [ 'key2', 'value2' ]
  [ 'key3', 'value3' ]
 */

// 使用解构
for (const [key, value] of map) {
  console.log(key, value)
}

/**
  key1 value1
  key2 value2
  key3 value3
 */
