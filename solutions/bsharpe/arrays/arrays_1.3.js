// 1.3 URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith "J 13
// Output: "Mr%20John%20Smith"

const URLify = (s) => {
  let firstPointer = s.length - 1;
  let secondPointer = s.length - 1;
  let spaces = 0;
  s = s.split("");
  while (s[firstPointer] === " ") {
    firstPointer--;
  }
  while (firstPointer >= 0 && secondPointer >= 0) {
    if (s[firstPointer] !== " ") {
      s[secondPointer] = s[firstPointer];
      secondPointer--;
    } else {
      spaces++;
      s[secondPointer] = "%";
      s[secondPointer - 1] = "0";
      s[secondPointer - 2] = "2";
      secondPointer = secondPointer - 3;
    }
    firstPointer--;
  }
  return s.slice(spaces, s.length).join("");
};

module.exports = { URLify };
