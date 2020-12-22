function pairSum(nums, target) {
  let bool = false;
  let set = new Set();
  if(nums.length<2) throw 'error! Array too small.';
  
  for(let element of nums){
    if(set.has(target-element)){
      bool = true;
      break;
    }
    else set.add(element);

  }
  return bool;
}

try{
  pairSum([1],2);
}catch(e){
  console.error(e);
}

// Do not edit this line;
module.exports = pairSum;