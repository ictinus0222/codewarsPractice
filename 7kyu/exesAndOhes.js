/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My Solution
function XO(str) {
    //code here
  let xCounter = 0, oCounter = 0;
  
  for(let i of str.toLowerCase()) {
    if (i == 'x') {
      xCounter++;
    }else if (i == 'o') {
      oCounter++;
    }
  }
  return xCounter === oCounter;
}
