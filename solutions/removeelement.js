/*
Problem: Given a value and a number array, "remove" the value *in-place*. Return the number of values not equal to the given value.
Ex: Val = 3, Nums = [3, 2, 2, 3]
    Expected Answer is: k = 2, Nums = [2, 2, _, _].
    It doesn't matter what the blanks are, but in my solution it's just the given value.
*/

function removeElement(nums, val) {
    let numsNotVal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !==  val) {
            numsNotVal++;
        } else {
            let notValIndex = findNextIndex(nums, val, i);
            if (notValIndex === -1) { break };
            nums[i] = nums[notValIndex];
            nums[notValIndex] = val;
            numsNotVal++;
        }
    }
    
    return numsNotVal;
}

function findNextIndex(nums, val, start) {
    let index = start;
    while (nums[index] === val) {
        index++;
        if (index >= nums.length) {
            return -1;
        }
    }
    return index;
}

module.exports = removeElement;