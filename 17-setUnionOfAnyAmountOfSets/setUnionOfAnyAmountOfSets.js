function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  for(const set of args){
    for(const num of set){
      if(!union.has(num)){
        union.add(num);
      }
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;