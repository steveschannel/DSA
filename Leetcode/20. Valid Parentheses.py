class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {
            ")" : "(",
            "}" : "{",
            "]" : "[",
        }
        for paren in s:
            
            if len(stack) == 0:
                stack.append(paren)
            elif paren in ["(","{","["]:
                stack.append(paren)
            elif stack[-1] == pairs[paren]:
                stack.pop()
            else:
                return False
            
        if len(stack) != 0:
            return False

        return True
            