type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result; // type is inferred

  //   if the type is number then
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    // if type is string then
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
