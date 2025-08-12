class Vehicles {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp(speedUp) {
        this.speed += speedUp;
    }
    speedDown(speedDown) {
        this.speed -= speedDown;
    }
    stop() {
        this.speed = 0;
    }
    getspeed() {
        return `Tốc độ hiện tại là: ${this.speed} km/h`;
    }
}
const myVehicle = new Vehicles(50);
myVehicle.speedUp(20);
myVehicle.speedDown(10);
console.log(myVehicle.getspeed());
myVehicle.stop();
console.log(myVehicle.getspeed());
