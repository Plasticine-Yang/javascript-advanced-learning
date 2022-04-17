var father = {
  name: '父类对象',
}

function createSon(p, name, age) {
  var son = Object.create(p)
  son.name = name
  son.age = age

  return son
}

var son = createSon(father, 'plasticine', 20)
console.log(son) // { name: 'plasticine', age: 20 }
