class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let found = false;
    if(nums.length == 1){
      if(nums[0]==target)return true;
      else return false;
    }
    else{
      let mid = Math.floor(nums.length/2);
      
      if (nums[mid] == target)return true;
      else if(target > nums[mid])
        found = this.binarySearch(nums.slice(mid),target);
      else
        found = this.binarySearch(nums.slice(0,mid),target);
    }
    return found;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;