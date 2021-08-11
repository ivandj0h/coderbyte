/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) {
  var words = sen.replace(/[^0-9A-Za-z\s]/g, "").split(" ");
  var longestWord = words.reduce(function (longestSoFar, currentWord) {
    return currentWord.length > longestSoFar.length
      ? currentWord
      : longestSoFar;
  });
  return longestWord;
}

console.log(LongestWord("I love dogs"));
