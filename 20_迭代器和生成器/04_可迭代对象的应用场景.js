const iterableObj = {
  arr: ['a', 'b', 'c'],
  [Symbol.iterator]() {
    let cursor = 0
    return {
      next: () => {
        if (cursor < this.arr.length) {
          return { done: false, value: this.arr[cursor++] }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  },
}

// 1. 展开运算符的目标对象要求是一个可迭代对象
const res = [...iterableObj]
console.log(res) // ['a', 'b', 'c']

// 2. 解构赋值
const [item1, item2] = iterableObj
console.log(item1, item2) // a b

// 特殊情况 -- 对象解构，用的并不是可迭代对象的原理
const obj = {
  name: 'obj',
  age: 20,
}
const { name, age } = obj

console.log(name, age) // obj 20

// 3. 函数参数中要求对象是可迭代对象
console.log(new Set(iterableObj)) // Set(3) { 'a', 'b', 'c' }
console.log(Array.from(iterableObj)) // [ 'a', 'b', 'c' ]
