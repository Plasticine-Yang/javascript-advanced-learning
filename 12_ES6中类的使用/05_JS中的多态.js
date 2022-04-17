function calcArea(obj) {
  console.log(obj.getArea())
}

var foo = {
  name: 'foo',
  getArea: function () {
    return 100
  },
}

class Shape {
  getArea() {
    return 1000
  }
}

var bar = {
  name: 'bar',
  getArea: function () {
    return 200
  },
}

var shape = new Shape()

calcArea(foo) // 100
calcArea(bar) // 200
calcArea(shape) // 1000
