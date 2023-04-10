// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (numbers) =>
  numbers.filter((number) => number % 2 !== 0);

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
