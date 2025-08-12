(()=>{
    class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const allStudents: Student[] = [
    new Student(1, "Nguyen Van A"),
    new Student(2, "Tran Thi B"),
    new Student(3, "Le Van C"),
    new Student(4, "Pham Thi D"),
    new Student(5, "Hoang Van E"),
    new Student(6, "Do Thi F")
];

class Classroom {
    students: Student[];

    constructor() {
        this.students = [];
    }

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh nào");
        } else {
            this.students.forEach(student => {
                console.log(student.toString());
            });
        }
    }

    addStudentInClass(studentId: number): void {
        const idS = allStudents.findIndex(student => student.getId() === studentId);
        if (idS !== -1) {
            this.students.push(allStudents[idS]);
            allStudents.splice(idS, 1);
        } else {
            console.log(`Không tìm thấy học sinh với id ${studentId} trong allStudents.`);
        }
    }

    removeStudent(studentId: number): void {
        const idx = this.students.findIndex(student => student.getId() === studentId);
        if (idx !== -1) {
            const removed = this.students.splice(idx, 1)[0];
            allStudents.push(removed);
            console.log(`Đã xóa ID ${studentId} khỏi lớp và thêm vào allStudents`);
        } else {
            console.log(`Ko tìm thấy học sinh id ${studentId} trong lớp`);
        }
    }

    editStudent(studentId: number, newName: string): void {
        const student = this.students.find(s => s.getId() === studentId);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật ID ${studentId} thành "${newName}"`);
        } else {
            console.log(`Không tìm id ${studentId} trong lớp`);
        }
    }
}

const class1 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

console.log("Danh sách lớp 1 ban đầu:");
class1.showStudents();

class1.removeStudent(2);

console.log("\nDanh sách lớp 1 sau khi xóa ID 2:");
class1.showStudents();

console.log("\nDanh sách allStudents sau khi xóa:");
console.log(allStudents.map(s => s.toString()));

class1.editStudent(1, "Nguyen Van A (Edited)");

console.log("\nDanh sách lớp 1 sau khi sửa tên ID 1:");
class1.showStudents();
})