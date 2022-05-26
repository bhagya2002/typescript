// constant
const userName = "Bhagya";

// same thing
let userAge = 30;
var user_age = 30;

// const add = (a: number, b: number) => {
//   return a + b;
// };

// b has a default value of 1
const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 12));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// spread operator to add all the elements of one array to another
activeHobbies.push(...hobbies);

const person = {
  firstName: "Bhagya",
  age: 19,
};

// key value pairs are added of the object
const copyPerson = { ...person };

const addition = (...number: number[]) => {
  return number.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

const addNumbers = addition(5, 10, 2, 3, 7.3);
console.log(addNumbers);

// array destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2, hobbies);

// making an alias for firstName
const { firstName: userFirstName, age } = person;

console.log(userFirstName, age);
