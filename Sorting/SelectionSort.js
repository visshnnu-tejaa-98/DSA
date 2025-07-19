/**
 * Class representing a solution for sorting algorithms.
 */
class Solution {
  /**
   * Sorts an array of numbers in ascending order using the selection sort algorithm.
   *
   * @param {number[]} nums - The array of numbers to be sorted.
   * @returns {number[]} The sorted array in ascending order.
   */
  selectionSort(nums) {
    // Outer loop to iterate over each element in the array
    for (let j = 0; j < nums.length; j++) {
      // Assume the current position is the minimum
      let min = j;
      // Inner loop to find the minimum element in the unsorted portion
      for (let i = j; i < nums.length; i++) {
        // If current element is less than the current minimum, swap them
        if (nums[i] < nums[min]) {
          [nums[i], nums[min]] = [nums[min], nums[i]];
        }
      }
    }
    // Return the sorted array
    return nums;
  }
}

// Example usage of the Solution class and selectionSort method
const solution = new Solution();
const res = solution.selectionSort([7, 1, 6, 4, 2]);
console.log("Selection Sort:::", res);
