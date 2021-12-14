class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Mekina extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom...");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const mekina = new Mekina(4, "red");
mekina.startDrivingProcess();
