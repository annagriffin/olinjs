let args = process.argv;
let nums = args.slice(2,args.length);
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Number(nums[i]);
}
console.log(sum);