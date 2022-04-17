class Shape {
  getArea(): number {
    return 100
  }
}

// 有继承
class Rectangle extends Shape {
  // 有重写
  getArea(): number {
    return 200
  }
}

// 有继承
class Circle extends Shape {
  // 有重写
  getArea(): number {
    return 300
  }
}

// 同一个操作（函数）
function calcArea(shape: Shape): number {
  return shape.getArea()
}

var rectangle = new Rectangle()
var circle = new Circle()

// calcArea 的参数类型为 Shape，而传入的却是 Rectangle 和 Circle 对象
// 即 父类引用（Shape）指向子类对象（rectangle、circle）
var recArea = calcArea(rectangle)
var cirArea = calcArea(circle)

// 同一个操作对不同的数据类型（Rectangle 和 Circle）有不同的行为（面积不同）
console.log(recArea) // 200
console.log(cirArea) // 300
