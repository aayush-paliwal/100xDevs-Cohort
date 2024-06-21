/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedStr = formattedStr.split('').reverse().join('');

  return reversedStr === formattedStr
  
  
}

// console.log(isPalindrome("NAman"));
console.log(isPalindrome("  asdf sdfd   "))
// console.log(("  asdf sdfd   ").trim())

module.exports = isPalindrome;
