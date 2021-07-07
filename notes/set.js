// a set of values which cannot be duplicates
let numberSet = [1, 2, 3, 4, 5, 6, 1, 2, 7];

let numSet = new Set(numberSet);

console.log(numSet);

console.log(numSet.has(6)); // True

// .has() checks if it is in the array
// .delete() deletes the value parameter from the array
// .clear() clears the set
