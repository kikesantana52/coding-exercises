/**

Idea
Steps:

Possible questions:
    - If it is empty, what should be the output?
    - If it only have 1 character, should I return it?
    - If two or more palindromes have the same length, which one should I return?
    - Is space a valid character?
    - If there is no palindromics, is 1 letter valid to be palindromic?

 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let longest = s.length;
  let forlen = 0;
  while (longest > 0) {
    for (let i = 0; i <= forlen; i++) {
      let str = s.substring(i, longest + i);
      let res = judge(str);
      if (res) {
        return res;
      }
    }
    longest--;
    forlen++;
  }
};
let judge = (s) => {
  if (s.length === 1) {
    return s;
  }
  if (s.length === 2) {
    return s[0] === s[1] ? s : false;
  }
  let isodd = s.length % 2 === 0;
  let start = 0;
  let end = s.length - 1;
  while (s[start] === s[end]) {
    if (isodd) {
      if (end === start - 1) {
        return s;
      }
    } else {
      if (end === start) {
        return s;
      }
    }
    ++start;
    end--;
  }
  return false;
};

module.exports = longestPalindrome;
