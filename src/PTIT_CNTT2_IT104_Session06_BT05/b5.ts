interface changeSpeed {
    speedUp(speedUp: number): void;
    speedDown(speedDown: number): void;
    stop(): void;
    getspeed(): string;
}
class Vehicles implements changeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(speedUp: number): void {
        this.speed += speedUp;
    }
    speedDown(speedDown: number): void {
        this.speed -= speedDown;
    }
    stop(): void {
        this.speed = 0;
    }
    getspeed(): string {
        return `Tốc độ hiện tại là: ${this.speed} km/h`;
 }
}
const myVehicle = new Vehicles(50);   
myVehicle.speedUp(20);
myVehicle.speedDown(10);
console.log(myVehicle.getspeed());
myVehicle.stop();
console.log(myVehicle.getspeed());




