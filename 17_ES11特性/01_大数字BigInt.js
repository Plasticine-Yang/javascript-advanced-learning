const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER

// ES11 以前的最大整数超出后不能正常使用
console.log(MAX_SAFE_INTEGER) // 9007199254740991
console.log(MAX_SAFE_INTEGER + 1) // 9007199254740992
console.log(MAX_SAFE_INTEGER + 2) // 9007199254740992
console.log(MAX_SAFE_INTEGER + 3) // 9007199254740994

// ES11 之后新增了大数字类型 BigInt -- 在结尾加 n
const bigInt = 900719925474099100n
console.log(bigInt)

// 不允许直接和 number 相加
// TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(bigInt + 1)

// 要将 number 也转成 大数字 BigInt
console.log(bigInt + BigInt(1)) // 900719925474099101n
// 或者用字面量形式 在末尾加 n
console.log(bigInt + 1n) // 900719925474099101n
