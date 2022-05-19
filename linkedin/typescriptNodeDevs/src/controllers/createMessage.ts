// exporting one class from one files you need "default"
// exporting more than one class from one file you need "export" and the list of classes

export default class Messenger {
  port: number;

  //   making an instance of the Messenger class
  constructor(port: number) {
    this.port = port;
  }

  //   methods
  messagePrint() {
    return `Your server is running on port ${this.port}`;
  }
}

// namespace Messagespace {
//   export class Messenger {
//     port: number;

//     //   making an instance of the Messenger class
//     constructor(port: number) {
//       this.port = port;
//     }

//     //   methods
//     messagePrint() {
//       return `Your server is running on port ${this.port}`;
//     }
//   }
// }
