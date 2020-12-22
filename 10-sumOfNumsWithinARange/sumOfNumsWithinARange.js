function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  for(let i = 0; i<nums.length;i++){
    if(nums[i]<=end && nums[i]>=start){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;