type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Admin & Employee is the intersection of the two types

const e1: ElevatedEmployee = {
  name: "Bhagya",
  privileges: ["create-server"],
  startDate: new Date(),
};

type UnkownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Name: " + emp.name);

  //   check if this property exists on the object
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("driving a car...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //   check if the vehicle is a truck
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  //   //   check if the animal is a bird
  //   if ("flyingSpeed" in animal) {
  //     speed = animal.flyingSpeed;
  //   } else {
  //     speed = animal.runningSpeed;
  //   }
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const para = document.querySelector("p"); // getting the p tag

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// if you know value exists, you can use the ! to get the value and the HTMLInputElement type
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

if (userInputElement) {
  userInputElement.value = "Hi there!";
}

interface ErrorContainer {
  // { email: "Not a valid email", username: "Must start with a character" }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a character!",
};
