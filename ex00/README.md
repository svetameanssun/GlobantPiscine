game 2048

.html
	backgorund color - soft pink
	grid border / cell border - black
	The grid size -> 4x4
	in the grid there are 2 digits of type number and value 2 located randomly on the grid.
	all the rest of numbers are 0 and they are invisible.



.css
	do not know what exactly to put here 
	I want the grd cells to be rounded squares

.js


	

	put 2 randomly on the grid {
		let randomX = randomNumberFunctionJs()%4;
		let randomY = randomNumberFunctionJs()%4;
		
		if (arr[randomX][randomY] === 0 ){
			arr[randomX][randomY] = 2;
		}
		else {
			recursion
			return();	
		}

	}

	
	button right is pressed{
		int y  = 0;
		int x = 0;
		while ( y < 4){
			if (x == 4){
				y++;
			}
			else{
				x++;
				while(x < 4){
					if (arr[x][y] == 0 || arr[x][y] == arr[x-1][y]){
						temp = array[x][y];
						array[x-1][y] -= temp;
						array[x][y] += temp
					}
					else{
						continue;
					}
					x++;
				}
			}
		}
	}

		button left is pressed{
		int y  = 0;
		int x = 4;
		while (y < 4){
			if (x == 0){
				y++;
			}
			else{
				x--;
				while(x >= 0){
					if (arr[x][y] == 0 || arr[x][y] == arr[x+1][y]){
						temp = array[x][y];
						array[x+1][y] -= temp;
						array[x][y] += temp
					}
					else{
						continue;
					}
					x--;
				}
			}
		}
	}

	button down is pressed{
		int y  = 0;
		int x = 0;
		while (x < 4){
			if (y == 4){
				x++;
			}
			else{
				y++;
				while(y < 4){
					if (arr[x][y] == 0 || arr[x][y] == arr[x][y-1]){
						temp = array[x][y];
						array[x][y-1] -= temp;
						array[x][y] += temp
					}
					else{
						continue;
					}
					y++;
				}
			}
		}
	}

	button up is pressed{
		int y  = 0;
		int x = 0;
		while (x < 4){
			if (y == 4){
				x++;
			}
			else{
				y--;
				while(y >= 0){
					if (arr[x][y] == 0 || arr[x][y] == arr[x][y+1]){
						temp = array[x][y];
						array[x][y+1] -= temp;
						array[x][y] += temp
					}
					else{
						continue;
					}
					y--;
				}
			}
		}
	}