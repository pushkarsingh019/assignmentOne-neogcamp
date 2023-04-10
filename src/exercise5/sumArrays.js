// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (array1, array2) => {
  let results = [];
  for (let i = 0; i < array1.length; i++) {
    results.push(array1[i] + array2[i]);
  }

  return results;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
