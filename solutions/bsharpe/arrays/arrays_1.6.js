/**
 * 1.6 String Compression: Implement a method to perform basic string
 * compression using the counts of repeated characters. For example,
 * the string aabcccccaaa would become a2b1c5a3. If the "compressed"
 * string would not become smaller than the original string, your
 * method should return the original string. You can assume the string
 * has only uppercase and lowercase letters (a - z).
 * @complexity O(N)
 * @author Blair Sharpe
 */
const stringCompression = (s) => {
  let result = [];
  let letter = "";
  let count = 0;
  s = s.split("");
  s.forEach((l) => {
    if (l !== letter) {
      if (letter.length) result.push(`${letter}${count}`);
      count = 1;
      letter = l;
    } else {
      count++;
    }
  });
  result.push(`${letter}${count}`);
  result = result.join("");
  if (result.length >= s.length) return s.join("");
  return result;
};

module.exports = { stringCompression };
