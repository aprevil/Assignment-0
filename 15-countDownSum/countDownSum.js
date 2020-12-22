class MySolution {
  countDownSum(num) {
    if(num == 1) return 1;
    let sum = num + this.countDownSum(num-1);
    return sum;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;