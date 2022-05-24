// const person: {
//   // specify the type of the properties of the class
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Bhagya", // string
//   age: 19, // num
//   hobbies: ["coding", "sports"], // array of strings
//   role: [2, "student"], // tuple, (string | number)[]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Bhagya", // string
  age: 19, // num
  hobbies: ["coding", "sports"], // array of strings
  role: Role.ADMIN, // enum
};

let favActivities: string[];
favActivities = ["coding", "sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
