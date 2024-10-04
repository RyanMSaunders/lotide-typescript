import { assertEqual } from "./assertEqual";

export const head= <T extends Exclude<any, object | any[]>>(arr: T[]): T | undefined => {
  const firstItem = arr[0]
  return firstItem
};

console.log(head([5, 6, 7]));

/**
 Create a function head which returns the first item in the array.

The head function should not return the first element as an array. 
It should simply return the element itself.

Instruction
Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function.

Here are some test assertions for you to implement and make pass:

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
You should always be thinking about other scenarios to consider. Here are some such examples and how they should be handled:

An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head



Alright! Imagine you have a magical box, and you don’t know what’s inside until someone gives it to you. The box could hold anything: a toy car, a cookie, or a book. You just know that when you get it, you’ll figure out what’s inside.

In programming, T is like a magical placeholder. It stands for "something" that will be figured out later. When someone uses the function you made, they tell you what that "something" is.

So, if you write:

typescript
Copy code
function giveMeSomething<T>(item: T): T {
  return item;
}
It’s like saying: “Give me something, and I’ll give you that exact same thing back!” But you don’t know if it's a toy car, cookie, or book until someone actually uses it.

If someone gives you a toy car (T becomes a toy car).
If someone gives you a cookie (T becomes a cookie).
You don’t need to know ahead of time what it is, just that you’ll figure it out when you get it!

So T is just a way of saying: "I don’t know what type this is yet, but I’ll find out when I need to!"
 */