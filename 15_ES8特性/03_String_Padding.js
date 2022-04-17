let str = 'Hello World'

console.log(str.padStart(15, '*')) // ****Hello World
console.log(str.padEnd(15, '*')) // Hello World****

console.log(str.padStart(15, '*').padEnd(19, '*')) // ****Hello World****

// 用*隐藏身份证前14位
const idCardNumber = '123456789123456789'
const lastFour = idCardNumber.slice(-4)
const res = lastFour.padStart(idCardNumber.length, '*')
console.log(res) // **************6789
