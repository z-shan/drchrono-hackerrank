function countMatches(str, pattern) {
  
  if(str === null || pattern === null) {
    return -1;
  }
  var count = 0;
  for(var i=0, j=0; i<str.length; i++) {
    if(str.charAt(i) === pattern.charAt(j) || pattern.charAt(j) === '*') {
      if(j === pattern.length -1) {
        count++;
        j=-1;
      }
      j++;
    } else {
      i -= j; // return i index back because substring is not matched1
      j = 0;
    }
  }
  
  return count;
 
}

console.log(strstr("ABCDDCDABCDABCDDDCDA", "AB*D"));