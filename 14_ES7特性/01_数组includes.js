// arr.includes 的使用
const arr = [1, 2, 3, 4, 5]

console.log(arr.includes(3)) // true
console.log(arr.includes(3, 3)) // false -- 从数组下标 3 开始判断

// arr.includes 可以判断 NaN

const arr1 = [1, 2, 3, 4, 5, 6, NaN]

console.log(arr1.indexOf(NaN) !== -1) // false -- indexOf 无法判断是否存在 NaN
console.log(arr1.includes(NaN)) // true
