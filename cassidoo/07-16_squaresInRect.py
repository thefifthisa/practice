# Given dimensions of a rectangle n and m, return the number of identical squares that can fit inside the rectangle.

def squaresInRect(n, m):
    totalArea = n * m
    maxLen = min(n, m) # maximum length of inner square
    for len in range(maxLen, -1, -1): # loop backwards from maxLen to get biggest inner square possible
        if n % len == 0 and m % len == 0: # inner square must evenly divide both dimensions of rectangle
            area = len * len
            return str(int(totalArea / area)) + ' (each of size ' + str(len) + 'x' + str(len) + ')'


print(squaresInRect(6, 9)) # 6 (each of size 3x3)
print(squaresInRect(4, 3)) # 12 (each of size 1x1)
print(squaresInRect(10, 35)) # 14 (each of size 5x5)
print(squaresInRect(2, 2)) # 1 (each of size 2x2)