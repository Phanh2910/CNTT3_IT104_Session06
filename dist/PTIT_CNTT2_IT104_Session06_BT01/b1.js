class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `Width: ${this.width}, Height: ${this.height}`;
    }
}
const rect = new Rectangle("Rectangle", 10, 20);
console.log(rect.getName());
console.log(rect.getSize());
