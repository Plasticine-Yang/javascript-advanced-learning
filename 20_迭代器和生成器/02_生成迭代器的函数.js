/**
 * 生成数组的迭代器
 * @param {Array} arr 数组
 * @returns 数组迭代器对象
 */
function createArrIterator(arr) {
  let cursor = 0

  return {
    next() {
      if (cursor < arr.length) {
        return { done: false, value: arr[cursor++] }
      } else {
        return { done: true, value: undefined }
      }
    },
  }
}

const arr = [1, 2, 3, 4, 5]
const arrIterator = createArrIterator(arr)

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
