# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:

        pointer = head
        while hasattr(pointer, "next"):
            # print(pointer.visited is not None)
            if hasattr(pointer, "visited"):
                return True
            else:
                pointer.visited = True
            pointer = pointer.next
        return False
