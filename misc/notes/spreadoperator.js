let bhagya = ["Bhagya", "19", "Software Student", "Soccer"];
let aarush = ["Aarush", "12", "Junior High Student", "Soccer"];
let dipalee = ["Dipalee", "43", "Artist", "Volleyball"];

// this create a subarray, array, subarray
let person = [bhagya, "Ajay", "45", "Chemical Engineer", "Cricket", aarush];
// one big array
let persons = [
  ...bhagya,
  "Ajay",
  "45",
  "Chemical Engineer",
  "Cricket",
  ...aarush,
];

console.log(person);
console.log(persons);
