const arr = ['a', 'b', 'c']

// 可迭代对象
const iterableObj = {
  arr: ['a', 'b', 'c'],
  [Symbol.iterator]() {
    let cursor = 0
    return {
      /**
       * 用箭头函数是因为迭代器中用到了 arr 变量
       * 而如果是普通函数的话，this 是会绑定到 next 函数返回的匿名对象中去的
       * 但是这个匿名对象中并没有 arr 这个变量，因此会到父级作用域去找
       * 父级作用域是全局作用域，全局作用域中并没有 arr 变量，因此无法正常工作
       * 而箭头函数中没有 this，因此会到上层作用域 [Symbol.iterator] 函数中找
       * [Symbol.iterator] 是一个普通函数，this 隐式绑定到 iterableObj 中
       * 因此 this.arr 指向的就是 iterableObj.arr
       * @returns 迭代器
       */
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

// 调用可迭代对象的 [Symbol.iterator] 方法就可以拿到可迭代对象，并且多次拿到的可迭代对象是相互独立的
const iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

const iterator2 = iterableObj[Symbol.iterator]()
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

// 可以使用 for...of 遍历，因为 for...of 就是用来遍历可迭代对象的
for (const item of iterableObj) {
  console.log(item) // a b c
}

// for...of 实际上是一种语法糖，它做的事情和下面等价
const iterator = iterableObj[Symbol.iterator]()
let obj = iterator.next()

while (!obj.done) {
  const value = obj.value
  // 遍历的操作 -- 这里以打印为例
  console.log(value)
  obj = iterator.next()
}
