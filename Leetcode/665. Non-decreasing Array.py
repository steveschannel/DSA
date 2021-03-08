class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        count = 0
        for index in range(1, len(nums)):
            if nums[index-1] > nums[index]:
                count+=1
                
                if count > 1:
                    return False
                elif index < 2 or nums[index-2] <= nums[index]:
                    nums[index-1] = nums[index]
                else:
                    if index == len(nums) -1:
                        nums[index] = nums[index-1]
                    else:
                        nums[index] = nums[min(len(nums)-1, index+1)]
                if not nums[max(index-2,0)] <= nums[index-1] <= nums[index]:
                    return False

        return True
        
# [3,2,5]->[3,3,5]
# [4,2,3]->[2,2,3]