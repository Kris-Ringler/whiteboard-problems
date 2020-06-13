/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  //create empty object
  //loop through array
  //if array[i] isnt in object, create a key and give it value 1
  //for each value increase keyvalue
  //return an array of the values of the keys
  if (nums.length === 1) {
    return nums;
  }
  const seen = {}
  const emptyArray = []
  let highestValue = null
  let highestKey;

  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]]) {
      seen[nums[i]] = 1
    }

    if (seen[nums[i]]) {
      seen[nums[i]]++
    }
  }

  for (const key in seen) {
    debugger;
    if (!highestValue) {
      highestValue = seen[key]
      highestKey = parseFloat(key)

    }

    if (seen[key] > highestValue) {
      highestValue = seen[key]
      highestKey = parseFloat(key)
      emptyArray.push(highestKey)
    }
  }
  return emptyArray
};
