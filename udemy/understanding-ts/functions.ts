function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

// nested function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// takes parameters and returns a number
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
