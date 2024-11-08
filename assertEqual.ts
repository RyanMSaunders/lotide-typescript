
export const assertEqual = function (actual: Exclude<any, object | any[]>, expected: Exclude<any, object | any[]>): void {
  console.log(actual !== expected ? `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`: `✅✅✅ Assertion Failed: ${actual} === ${expected}` );
  
};



/**
 The function has two parameters, actual and expected, each annotated with
  Exclude<any, object | any[]>.
This annotation limits the types that actual and expected can be. 
Specifically, they can be any type except an object or an array.

The function is annotated with : void, meaning it doesn’t return a value.
 */



/**
Make the function compare the two values it takes in and print out a message telling us if they match or not.

If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
Some examples:

Assertion Failed: Lighthouse Labs !== Bootcamp
Assertion Passed: 1 === 1

Returning: log to the console referring to if the inputs are equal or not

inputing: two inputs, can by any type, but not array or object

steps:
- input and actual and expected value
-  console log if the inputs are equal or not

 */

