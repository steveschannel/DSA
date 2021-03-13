class Solution:
    def romanToInt(self, s: str) -> int:
        counter = 0
        values = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        for index in range(0, len(s)):
            if values[s[max(index - 1, 0)]] < values[s[index]]:
                counter = counter - 2 * \
                    values[s[max(index - 1, 0)]] + values[s[index]]
            else:
                counter += values[s[index]]

        return counter
