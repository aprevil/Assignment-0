function isPalindrome(word) {
  let test = true;
  let end = word.length-1;
  for(let i = 0; i<word.length;i++){
    if(word.charAt(i)!=word.charAt(end)) test = false;
    end--;
    if(end<i) break; 
  }
  return test;
}

// Do not edit this line;
module.exports = isPalindrome;