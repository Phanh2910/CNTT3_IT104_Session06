//interface: giống một contract mà các bên phải tuân theo
const students = {
    name: "Dio",
    age: 18,
    address: "Japanese",
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    },
};
const students2 = {
    name: "Jotaro",
    age: 19,
    address: "Japanese",
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
};
//có thể kế thừa từ interface khác
class S {
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}
