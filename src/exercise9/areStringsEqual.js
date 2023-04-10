// 9. Write an ES6 function that takes two strings as input and determines if they are the same or not.

export const areStringsEqual = (string1, string2) => string1 === string2;

console.log(areStringsEqual("Apple", "Apple")); // true
console.log(areStringsEqual("Apple", "apple")); // false
console.log(areStringsEqual("Papaya", "Watermelon")); // false
