class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = []; // type list of strings, init is empty array

  //   init work when instance is created
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = i;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // add employee to list
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[]; // default public and only for this class
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid report!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// instance of Department
const hr = new ITDepartment("d1", ["max"]);

hr.addEmployee("Max");
hr.addEmployee("Manu");

// hr.employees[2] = "Anna";

hr.describe();
hr.printEmployeeInformation();
console.log(hr);

// const accountingCopy = { name: "DUMMY", describe: hr.describe };
// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Youre end report";
console.log(accounting.mostRecentReport);

accounting.addReport("Smth went wrong...");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.printReports();
