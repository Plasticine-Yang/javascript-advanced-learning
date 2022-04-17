var names = ['abc', 'cba', 'nba']

// 全部解构
var [name1, name2, name3] = names
console.log(name1, name2, name3) // abc cba nba

// 部分解构
var [, name22, name33] = names
console.log(name22, name33) // cba nba

// 解构出部分元素，剩余的放入新数组中
var [name11, ...restNames] = names
console.log(name11, restNames) // abc [ 'cba', 'nba' ]

// 解构的默认值
var [abc, cba, nba, notExist = 'hahaha'] = names
console.log(abc, cba, nba, notExist) // abc cba nba hahaha
