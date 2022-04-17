const obj = {
  name: 'plasticine',
  age: 20,
}

// 假设从网络请求的响应中拿到的数据就是 entries 格式的数据 -- [['name', 'plasticine'], ['age', 20]]
const entries = Object.entries(obj)

const originalObj = Object.fromEntries(entries)
console.log(originalObj) // { name: 'plasticine', age: 20 }

// url请求参数转成对象
const url = 'https://xxx.com/api/v1?name=plasticine&age=20&address=Guangzhou'
// 获取查询参数
const queryString = url.split('?')[1] // name=plasticine&age=20&address=Guangzhou
// 使用 URLSearchParams 将查询参数字符串转成可迭代对象
const searchParams = new URLSearchParams(queryString)
console.log(searchParams) // URLSearchParams { 'name' => 'plasticine', 'age' => '20', 'address' => 'Guangzhou' }
// 可迭代对象是类似 entries 格式的数据对象，因此可以转成对象
const queryObj = Object.fromEntries(searchParams)
console.log(queryObj) // { name: 'plasticine', age: '20', address: 'Guangzhou' }
