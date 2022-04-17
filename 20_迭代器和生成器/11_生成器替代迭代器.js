// function* createArrIterator(arr) {
//   for (const item of arr) {
//     yield item
//   }
// }
function* createArrIterator(arr) {
  yield* arr
}

const iterator = createArrIterator([1, 2, 3, 4, 5])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
