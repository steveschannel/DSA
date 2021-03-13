class MyHashSet:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.size = 1000000
        self.myList = [None] * self.size

    def index(self, key: int) -> int:
        index = key % self.size
        return index

    def add(self, key: int) -> None:
        if self.contains(key):
            pass
        else:
            self.myList[self.index(key)] = key

    def remove(self, key: int) -> None:
        self.myList[self.index(key)] = None

    def contains(self, key: int) -> bool:
        if self.myList[self.index(key)] == key:
            return True
        else:
            return False
