function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
}

Vehicle.prototype.getPrice = function () {
    return this.price;
};

var vehicle1 = new Vehicle(2, 200000);
var vehicle2 = new Vehicle(5, 500000);

console.log(vehicle1.__proto__);
console.log(vehicle2.__proto__);
console.log(vehicle1.__proto__===Vehicle.prototype);
console.log(vehicle2.__proto__===Vehicle.prototype);
console.log(Object.getPrototypeOf(vehicle1));
console.log(Object.getPrototypeOf(vehicle2));
console.log(Vehicle.prototype.isPrototypeOf(vehicle1));
console.log(Vehicle.prototype.isPrototypeOf(vehicle2));
console.log(vehicle1.hasOwnProperty('price'));
console.log(vehicle2.hasOwnProperty('price'));
console.log(vehicle1.hasOwnProperty('getPrice'));
console.log(vehicle2.hasOwnProperty('getPrice'));

Vehicle.prototype.color = "black";

console.log(vehicle1.color);
console.log(vehicle2.color);

vehicle1.color = "white";

console.log(vehicle1.color);
console.log(vehicle2.color);