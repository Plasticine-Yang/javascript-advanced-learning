var attrName = 'plasticine'

var foo = {
  name: 'foo',
  [attrName + '666']: 'hahaha',
}

console.log(foo) // { name: 'foo', plasticine666: 'hahaha' }
