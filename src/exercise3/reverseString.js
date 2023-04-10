// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (string) =>
  [...string].reduce((reverse, character) => character + reverse, "");

console.log(reverseString("neoG Camp")); // pmaC Goen
