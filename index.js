function Point(x,y) {
  this.x = x
  this.y = y
  this.toString = function(){
    return `(${this.x},${this.y})`
  }
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  return this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  return this.position = new Point(x, y)
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

/////Circle shit/////
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius + this.radius
}

Circle.prototype.area = function(){
  // return Math.PI * Math.pow(this.radius, 2)
  return 4
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

///////Polygon shit/////
function Side(length){
  this.length = length
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function(){
  return this.sides.reduce((total, side) =>{
    return total + side.length
  }, 0)
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

/////Quadrilateral shit/////
function Quadrilateral(a,b,c,d){
  Polygon.call(this)
  this.sides = [new Side(a),new Side(b),new Side(c),new Side(d)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

/////Triangle Shit/////
function Triangle(x,y,z){
  Polygon.call(this)
  this.sides = [new Side(x), new Side(y), new Side(z)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle;

/////Rectangle Shit/////
function Rectangle(width, height){
  Quadrilateral.call(this)
  this.width = width
  this.height = height
  this.sides = [new Side(width), new Side(height), new Side(width), new Side(height)]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
  return this.width * this.height
}

/////Square Shit/////
function Square(length){
  Rectangle.call(this)
  this.length = length
  this.width = length
  this.height = length
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function(){
  var propString = ""
  for(var prop in this){
    if(this.hasOwnProperty(prop)){
      propString += prop
    }
  }
  return propString
}
