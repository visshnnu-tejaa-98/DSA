class Solution {
    bubbleSort(nums) {
        for (let j = 0; j < nums.length; j++) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] > nums[i + 1]) {
                    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                }
            }
        }
        return nums
    }
}