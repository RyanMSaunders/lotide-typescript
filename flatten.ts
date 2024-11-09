
export const flatten = function <T>(arr: T[]): T[] {
 let result: T[] = [];

  for ( let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i] as T[]))
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// console.log( flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]);




/**
 Create a function flatten which will take in an array 
 containing elements including nested arrays of elements, 
 and return a "flattened" version of the array.

 flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

returns flattened version of array


inputting array containing nested arrays
- create and empty results array
- loop through array
- if element isArray, flatten that array
- else, add element to results array
returns flattened version of array




 */