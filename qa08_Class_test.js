class Rectangle {
    constructor(details) {
      let {height, width} = details;
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    set area(val) {
     this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }

  let rect = new Rectangle({
      height : 100,
      width : 50
    });

  console.log(rect.area)
  rect.height = 50;
  console.log('..height'+rect.height);
  console.log(rect.area)

  class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    // constructor(name) {
    //   super(name); // call the super class constructor and pass in the name parameter
    // }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.


  //Static
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.distance; //undefined
  p2.distance; //undefined
  
  console.log(Point.distance(p1, p2)); // 7.0710678118654755