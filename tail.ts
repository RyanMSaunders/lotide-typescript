import { assertEqual } from "./assertEqual";

export const tail = <T>(arr: T[]): T[] => {
  const newArr = arr.slice(1)
  
  return newArr
}


// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


/**
 Create a function tail which returns the "tail" of an array: 
 everything except for the first item (head) of the provided array.
 Create a new array

 Returning: all values except the first item of the array
 input: array

 

  input: array
- remove first item of array using pop? splice?
-
-
 Returning: all values except the first item of the array

 */