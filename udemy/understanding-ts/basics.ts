function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number {
  // the sum of the two nums
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

// if you use let instead of const, you can change the value of the variable then assign a type to it
let number1;
number1 = "5"; // does not give an error since no type is specified
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
