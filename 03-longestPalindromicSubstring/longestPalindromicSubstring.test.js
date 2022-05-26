const longestPalindrome = require("./longestPalindromicSubstring");

test("Longest Palindrome -> babad returns bab or aba", () => {
  expect(longestPalindrome("babad")).toBe("bab");
});

test("Longest Palindrome -> cbbd returns bb", () => {
  expect(longestPalindrome("cbbd")).toBe("bb");
});

test("Longest Palindrome -> a returns a", () => {
  expect(longestPalindrome("a")).toBe("a");
});
