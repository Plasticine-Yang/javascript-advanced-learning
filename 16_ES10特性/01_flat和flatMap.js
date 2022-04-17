// flat
const arr = [[1, 2, 3], 4, 5, 6, [7, [8, 9]]]
console.log(arr.flat()) // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ] -- depth 为 1 的 flat
console.log(arr.flat(2)) // [(1, 2, 3, 4, 5, 6, 7, 8, 9)] -- depth 为 2 的 flat

// flatMap
const messages = ['Hello World', 'I am Batman', 'Who am I?']

// 将 messages 的每个单词分出来放入数组中
const flatMsgs = messages.flatMap((item) => {
  return item.split(' ')
})

console.log(flatMsgs) // ['Hello', 'World', 'I', 'am', 'Batman', 'Who', 'am', 'I?']

// 如果不用 flatMap
const msgArr = messages.map((item) => {
  return item.split(' ')
})
console.log(msgArr) // [['Hello', 'World'], ['I', 'am', 'Batman'], ['Who', 'am', 'I?']]

console.log(msgArr.flat()) // ['Hello', 'World', 'I', 'am', 'Batman', 'Who', 'am', 'I?']
