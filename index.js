// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity:

// Brute Force: O(n^2)

// HashMap: O(n)

// Two pass HashMap: O(n)

// Two Pointer: O(n log n)

// Approach 1: Brute Force
// Nested loop is computationally expensive
// only fine if size of input is small

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// Approach 2: HashMap Approach
// Not a nested loop - only iterate the array once

function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}

// Approach 3
