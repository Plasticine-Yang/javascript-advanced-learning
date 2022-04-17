const obj = {
  name: 'plasticine',
  age: 20,
}

console.log(Object.entries(obj)) // [ [ 'name', 'plasticine' ], [ 'age', 20 ] ]

// 遍历 entries
const entries = Object.entries(obj)

entries.forEach((item) => {
  console.log(item)
})

/**
  [ 'name', 'plasticine' ]
  [ 'age', 20 ]
 */

entries.forEach(([key, value]) => {
  console.log(key, value)
})

/**
  name plasticine
  age 20
 */
