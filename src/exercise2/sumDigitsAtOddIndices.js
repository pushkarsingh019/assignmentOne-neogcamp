// 2. Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

export const sumDigitsAtOddIndices = (numbers) => {
  const numbersAtOddInstances = numbers.map((number, index) =>
    index % 2 !== 0 ? number : 0
  );
  const sumOfDigits = numbersAtOddInstances.reduce(
    (sum, number) => sum + number,
    0
  );
  return sumOfDigits;
};

console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20
