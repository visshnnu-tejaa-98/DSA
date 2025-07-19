/**
 * Class containing sorting algorithms.
 */
class Solution {
  /**
   * Sorts an array of numbers using the insertion sort algorithm.
   * @param {number[]} nums - The array of numbers to sort.
   * @returns {number[]} The sorted array.
   */
  insertionSort(nums) {
    // Iterate over each element in the array starting from the first element
    for (let i = 0; i < nums.length; i++) {
      // Initialize j to the current index i
      let j = i;
      // Shift elements of the sorted segment forward if they are greater than the current element
      while (j > 0 && nums[j - 1] > nums[j]) {
        // Swap the elements at indices j-1 and j
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        // Move j one position backward
        j--;
      }
    }
    // Return the sorted array
    return nums;
  }
}

const solution = new Solution();
const res = solution.insertionSort([7, 4, 1, 5, 3]);
console.log("Insertion Sort:::", res);
