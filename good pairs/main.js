/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    //loop through numbers, if there is a match, pairs++, return pairs
    let pairs = 0
    for(let i = 0; i < nums.length; i++){
        let comparisonNumber = nums[i]
        
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] === comparisonNumber){
                pairs++
            }
        }
    }

    return pairs
};