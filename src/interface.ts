//interface: giống một contract mà các bên phải tuân theo

interface students{
    name: string;
    age: number;
    address: string;
    //có phương thức chỉ viết tên hàm và không viết logic bên trong
    getInfo(): string;
}
interface Contact{
    email: string;
    phone: string;
}

const students: students = {
    name: "Dio",
    age: 18,
    address: "Japanese",
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    },
}
const students2: students = {
    name: "Jotaro",
    age: 19,
    address: "Japanese",
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

//có thể kế thừa từ interface khác

class S implements students {
    name: string;
    age: number;
    address: string;
    email: string;
    phone: string;
    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }


}