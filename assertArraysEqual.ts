import { eqArrays } from "./eqArrays";

export const assertArraysEqual = function <T>(arr1: T[], arr2: T[]): void {

  const result = eqArrays(arr1, arr2);

  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
     
  } else {
  console.log(`✅✅✅ Assertion Failed: ${arr1} === ${arr2}`);
  
  }
  
}

