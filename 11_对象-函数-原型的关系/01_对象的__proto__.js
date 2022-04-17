// 对象有隐式原型[[prototype]]，在浏览器或node实现中，可以用__proto__来查看
var foo = {
  name: 'foo',
}

console.log(foo.__proto__) // [Object: null prototype] {}
