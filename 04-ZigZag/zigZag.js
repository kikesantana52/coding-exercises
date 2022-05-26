/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);



Possible questions:
    - Can string be empty?
    - Can numRows be greater than the current length of the string?
    - Can the string have blank spaces?
    
    
    Steps:
    - Create array with numRows length
    - Loop trough the characters of the string
    - Have a index/counter that starts at 0
    - While the counter is lower than the numRows I will be adding one, once it reach numRows, will invert and I will be removing 1 per loop (Will keep track with a flag)
    - I will be adding the character to the string saved in the array in position "counter"
    - join every item in the array in one only string
    

 * @param {string} s
 * @param {number} numRows
 * @return {string}
 
 
 */
var convert = function (s, numRows) {
  const myArray = new Array(numRows);
  myArray.fill("");
  let counter = 0;
  let goingUnder = true;
  [...s].forEach((current) => {
    myArray[counter] += current;
    if (goingUnder && counter < numRows) {
      counter++;
      if (counter === numRows) {
        goingUnder = false;
        counter--;
      }
    }
    if (!goingUnder && counter > 0) {
      counter--;
      if (counter === 0) {
        goingUnder = true;
      }
    }
  });
  return myArray.join("");
};

module.exports = convert;
