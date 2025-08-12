abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): string;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): string {
        return `Width: ${this.width}, Height: ${this.height}`;
    }
}

const rect = new Rectangle("Rectangle", 10, 20);
console.log(rect.getName());
console.log(rect.getSize());