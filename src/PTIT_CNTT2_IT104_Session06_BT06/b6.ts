class Students {
    private id: number
    name: string

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
const allStudents: Students[] = [];

class Classroom {
    private students: Students[] = [];
    addStudentInClass(id: number): void {
        const student = allStudents.find(s => s.getId() === id);
        if (student) {
            this.students.push(student);
            const index = allStudents.indexOf(student);     
    if (index > -1) {
                allStudents.splice(index, 1);
            }
        } else {
            console.log(`Học sinh với ID ${id} không tồn tại trong danh sách allStudents.`);
        }
    }
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp này chưa có học sinh nào.");
        } else {
            this.students.forEach(student => console.log(student.toString()));
        }
    }
}


allStudents.push(
    new Students(1, "Nguyen Van A"),
    new Students(2, "Nguyen Van B"),
    new Students(3, "Nguyen Van C"),
    new Students(4, "Nguyen Van D"),
    new Students(5, "Nguyen Van E"),
    new Students(6, "Nguyen Van F"),
);

const class1 = new Classroom();
const class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Danh sách học sinh lớp 1:");
class1.showStudents();

console.log("\nDanh sách học sinh lớp 2:");
class2.showStudents();

console.log("\nDanh sách allStudents còn lại:");
console.log(allStudents.map(s => s.toString()));