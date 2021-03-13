class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        target = len(nums)/2

        counter = {}

        for num in nums:
            if num in counter:
                counter[num] += 1
                if counter[num] > target:
                    return num
            else:
                counter[num] = 1
                if counter[num] > target:
                    return num
