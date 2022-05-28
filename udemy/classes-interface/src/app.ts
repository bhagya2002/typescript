class Department {
  name: string = "DEFAULT";

  //   init work when instance is created
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("department: " + this.name);
  }
}

// instance of Department
const hr = new Department("HR");

hr.describe();

const accountingCopy = { name: "DUMMY", describe: hr.describe };
accountingCopy.describe();
