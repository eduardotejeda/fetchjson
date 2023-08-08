//Alwasy capilaze name of classs

//Super class
class Vehicle {
  public drive(): void {
    console.log('chugga chugga')
  }

  protected honk(): void {
    console.log('beep')
  }
}

//Child class
class Car extends Vehicle {
  private drive() : void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

}

const car = new Car();

car.startDrivingProcess();
car.honk();
