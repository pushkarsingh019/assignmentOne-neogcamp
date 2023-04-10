// 10. Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

export const getNamesOfAdults = (people) =>
  people.filter((person) => person.age >= 60).map((person) => person.name);

const people = [
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 }
];
console.log(getNamesOfAdults(people)); // ["Alice", "Charlie"]
