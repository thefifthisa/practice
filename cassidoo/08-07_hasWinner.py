# Implement a function that determines if someone has won a game of tic-tac-toe.

def hasWinner(board):
	# rows
	for x in range(3):
		if '_' != board[x][0] == board[x][1] == board[x][2]:
			return True
	
	# columns
	for y in range(3):
		if '_' != board[0][y] == board[1][y] == board[2][y]:
			return True
	
	# diagonals
	if '_' != board[0][0] == board[1][1] == board[2][2]:
		return True
	if '_' != board[0][2] == board[1][1] == board[2][0]:
		return True
	
	return False