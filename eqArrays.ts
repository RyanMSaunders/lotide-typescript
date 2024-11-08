import { assertEqual } from "./assertEqual";

export const eqArrays = function <T>(arr1: T[], arr2: T[]): boolean | undefined {
  
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true

}

assertEqual(eqArrays([1, 2, 3], [12, 2, 3]), true); // => should PASS

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));




/**
 * 

Returning a function that returns true when arrays are equal

Input two arrays
- Loop through first array 
- inside, loop through second array
- For each item of array1, if equal to item at that index of array2

Returning a function that returns true when arrays are equal

 
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

*/