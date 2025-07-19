/**
 * Class representing a solution for sorting algorithms.
 */
class Solution {
  /**
   * Sorts an array of numbers in ascending order using the bubble sort algorithm.
   *
   * @param {number[]} nums - The array of numbers to be sorted.
   * @returns {number[]} The sorted array in ascending order.
   */
  bubbleSort(nums) {
    // Outer loop to ensure the process is repeated enough times
    for (let j = 0; j < nums.length; j++) {
      // Inner loop to compare adjacent elements
      for (let i = 0; i < nums.length; i++) {
        // Swap if the current element is greater than the next element
        if (nums[i] > nums[i + 1]) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        }
      }
    }
    // Return the sorted array
    return nums;
  }
}

// Example usage of the Solution class and bubbleSort method
const solution = new Solution();
const res = solution.bubbleSort([7, 1, 6, 4, 2]);
console.log("Bubble Sort:::", res);
