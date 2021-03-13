class Solution:
    iterations = set()

    def isHappy(self, n: int) -> bool:
        s_rep = str(n)

        sum = 0

        for digit in [int(x) for x in s_rep]:
            print(digit)
            sum += digit*digit

        if sum == 1:
            self.iterations.clear()  # clear class after other test cases
            return True
        elif sum in self.iterations:
            self.iterations.clear()  # clear class after other test cases
            return False
        else:
            self.iterations.add(sum)
            return self.isHappy(sum)
