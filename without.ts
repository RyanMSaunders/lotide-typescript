
export const without = function <T>(source: T[], itemsToRemove: T[]): T[] {
  let result = [];

  for (let val of source) {
      if (!itemsToRemove.includes(val)) {
        result.push(val)
      }
  }
  return result;
};




/**
 * Implement without which will return a subset of a given array,
 *  removing unwanted elements.
 returning subset of given array. do not modify original array.

 input source array, items to remove
 - define result
 - loop through items to remove array
 - loop through source array
 - if item in source array !== item to remove
 - add to result array

 */