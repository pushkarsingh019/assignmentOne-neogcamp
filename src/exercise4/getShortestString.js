// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (arrayOfStrings) =>
  arrayOfStrings.reduce(
    (shortestString, string) =>
      string.length < shortestString.length
        ? (shortestString = string)
        : shortestString,
    arrayOfStrings[0]
  );

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
