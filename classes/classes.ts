//Alwasy capilaze name of classs

//Super class
class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }

  honk(): void {
    console.log('beep')
  }
}

//Child class
class Car extends Vehicle {
  drive() : void {
    console.log('vroom')
  }

}

const car = new Car();

car.drive();
car.honk();
