// const names: Array<string | number> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Max", hobbies: ["Sports"] },
  { age: 30 }
);
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDecribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDecribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Bhagya" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  // add items to the data storage
  addItem(item: T) {
    this.data.push(item);
  }

  // clear the data storage
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  // get the data storage
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// add item to the storage
textStorage.addItem("Bhagya");
textStorage.addItem("Patel");
textStorage.removeItem("Bhagya");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
