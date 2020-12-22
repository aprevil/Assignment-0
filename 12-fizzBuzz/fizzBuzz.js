function fizzBuzz(start, end) {
  let nums = new Array(end-start+1);
  
  for(let i = 0;i<nums.length;i++){
    if(start%3==0 && start%5==0)nums[i] ="FizzBuzz";
    else if(start%3==0) nums[i] = "Fizz";
    else if(start%5==0) nums[i] = "Buzz";
    else nums[i] = start;
    
    start++;
  }
  return nums;
}

// Do not edit this line;
module.exports = fizzBuzz;