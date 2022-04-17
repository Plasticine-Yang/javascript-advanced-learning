const arr = ['a', 'b', 'c']

// 有问题的迭代器
// const arrIterator = {
//   next: function () {
//     return { done: false, value: 'a' }
//     return { done: false, value: 'b' }
//     return { done: false, value: 'c' }
//     return { done: true, value: undefined }
//   },
// }

// 修正版
let cursor = 0
const arrIterator = {
  next: function () {
    if (cursor < arr.length) {
      return { done: false, value: arr[cursor++] }
    } else {
      return { done: true, value: undefined }
    }
  },
}

console.log(arrIterator.next()) // { done: false, value: 'a' }
console.log(arrIterator.next()) // { done: false, value: 'b' }
console.log(arrIterator.next()) // { done: false, value: 'c' }
console.log(arrIterator.next()) // { done: true, value: undefined }
console.log(arrIterator.next()) // { done: true, value: undefined }
console.log(arrIterator.next()) // { done: true, value: undefined }
