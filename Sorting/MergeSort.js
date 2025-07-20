/**
 * Class to implement the Merge Sort algorithm.
 * It provides methods to recursively divide the array and merge sorted halves.
 */
class Solution {
  /**
   * Merges two sorted subarrays of nums.
   * The first subarray is nums[low..mid]
   * The second subarray is nums[mid+1..high]
   * @param {number[]} nums - The array to be sorted
   * @param {number} low - Starting index of the first subarray
   * @param {number} mid - Ending index of the first subarray
   * @param {number} high - Ending index of the second subarray
   */
  mergeProcess(nums, low, mid, high) {
    let temp = []; // Temporary array to store merged result
    let left = low; // Pointer for the left subarray
    let right = mid + 1; // Pointer for the right subarray

    // Merge elements from both subarrays in sorted order
    while (left <= mid && right <= high) {
      if (nums[left] < nums[right]) {
        temp.push(nums[left]);
        left++;
      } else {
        temp.push(nums[right]);
        right++;
      }
    }

    // If there are remaining elements in the left subarray, add them
    while (left <= mid) {
      temp.push(nums[left]);
      left++;
    }

    // If there are remaining elements in the right subarray, add them
    while (right <= high) {
      temp.push(nums[right]);
      right++;
    }

    // Copy the merged elements back into the original array
    for (let i = low; i <= high; i++) {
      nums[i] = temp[i - low];
    }
  }

  /**
   * Recursively divides the array into halves and sorts them.
   * @param {number[]} nums - The array to be sorted
   * @param {number} low - Starting index of the subarray to sort
   * @param {number} high - Ending index of the subarray to sort
   */
  merge(nums, low, high) {
    if (low >= high) return; // Base case: single element is already sorted
    let mid = Math.floor((low + high) / 2);
    this.merge(nums, low, mid); // Sort left half
    this.merge(nums, mid + 1, high); // Sort right half
    this.mergeProcess(nums, low, mid, high); // Merge sorted halves
  }

  /**
   * Public method to perform merge sort on the entire array.
   * @param {number[]} nums - The array to be sorted
   * @returns {number[]} - The sorted array
   */
  mergeSort(nums) {
    let low = 0;
    let high = nums.length - 1;
    this.merge(nums, low, high);
    return nums;
  }
}

// Example usage:
const solution = new Solution();
const arr = [5, 2, 9, 1, 3];

console.log(solution.mergeSort(arr)); // Output: [1, 2, 3, 5, 9]
