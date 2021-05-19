// this returns dynamically created constructor functions
function factoryFactory(type) {

  // this returns a constructor function
  return function Factory(make, model) {
    this.type = type;
    this.make = make;
    this.model = model;
  }

}

const Bicycle = factoryFactory("bike");
const Car = factoryFactory("car");
const Blimp = factoryFactory("blimp");

const vehicles = [
  new Bicycle("Cannondale", "X1"),
  new Bicycle("Cannondale", "X2"),
  new Car("Fiat", "500"),
  new Car("Opel", "Astra"),
  new Blimp("Goodyear", "X2000")
];

for (let i = 0; i < vehicles.length; i++) {
  console.log("Vehicle -"+i+"- ", vehicles[i]);
}

console.log(typeof Bicycle); // function
console.log(typeof vehicles[0]); // object
