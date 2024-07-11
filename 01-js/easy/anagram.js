/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let l1 =str1.length;
  let l2 =str2.length;

  if(l1!=l2) return false;

  let sort1 = str1.toLowerCase().split("").sort().join("");
  let sort2 = str2.toLowerCase().split("").sort().join("");
  
  return sort1===sort2;
}

module.exports = isAnagram;
