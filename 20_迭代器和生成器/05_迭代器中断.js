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
      return() {
        console.log('迭代器即将中断')
        return { done: true, value: undefined }
      },
    }
  },
}

for (const item of iterableObj) {
  if (item === 'c') break
  console.log(item)
}

// a b 迭代器即将中断
