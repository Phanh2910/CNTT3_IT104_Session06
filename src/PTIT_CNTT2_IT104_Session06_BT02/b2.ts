// Định nghĩa lớp abstract Job
abstract class Job {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}
class ParttimeJob extends Job {
    workingHour: number;

    constructor(workingHour: number) {
        super("Parttime");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }

    calculateSalary(): number {
        return 10000000;
    }
}
const parttime = new ParttimeJob(80);
const fulltime = new FulltimeJob();

parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VND`);
