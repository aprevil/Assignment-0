function frequencyCounter(word) {
  
  let test = {};
  for(let i = 0;i<word.length;i++){
    if(!test[word.charAt(i)])
      test[word.charAt(i)] = 1;
    else
      test[word.charAt(i)]++;
  }
 
  return test;
}

// Do not edit this line;
module.exports = frequencyCounter;