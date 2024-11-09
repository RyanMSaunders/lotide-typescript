
export const middle = <T>(arr: T[]): T[] => {
  
  let result = []

  if (arr.length <= 2) {
    return []
  }

  if (arr.length % 2 === 0) {
    const num1 = arr.length / 2
    const num2 = num1 + 1
    result.push(arr[num1 - 1], arr[num2 -1])
  }

  if (arr.length % 2 === 1) {
    const oddMiddle = Math.round(arr.length / 2)
    result.push(arr[oddMiddle -1])
  }

  return result
};

// console.log(middle([1]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2]));



/*

input array
- find if the arr is even or odd. if arr.length % 2 === 0, 
- return the values at the indexes of the array length / 2 and /2 +1
- if arr.length % 2 === 1, 
- return the rounded index value of arr.length/ 2
returning the middle most elements of the array



Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]); // => []
middle([1, 2]); // => []
For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

returning the middle most elements of the array




*/
