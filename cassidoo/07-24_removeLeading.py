# Given an int array, remove all leading zeros from the array.

def removeLeading(arr):
	firstNonZero = next((i for i, n in enumerate(arr) if n), None)
	if not firstNonZero: return []
	return arr[firstNonZero:]

print(removeLeading([0, 0, 0, 1, 0, 2, 3])) # [1, 0, 2, 3]
print(removeLeading([0, 0, 0])) # []