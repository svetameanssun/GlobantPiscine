const grid = document.getElementById('grid');
let arr = [];

// Initialize a 4x4 grid with zeros
function initGrid() {
  arr = [];
  grid.innerHTML = '';
  for (let y = 0; y < 4; y++) {
    arr[y] = [];
    for (let x = 0; x < 4; x++) {
      arr[y][x] = 0;
      const cell = document.createElement('div');
      cell.classList.add('cell', 'zero');
      cell.id = `cell-${y}-${x}`;
      grid.appendChild(cell);
    }
  }
  placeRandomTwo();
  placeRandomTwo();
  updateGrid();
}

function placeRandomTwo() {
  let emptyCells = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (arr[y][x] === 0) emptyCells.push({ x, y });
    }
  }
  if (emptyCells.length === 0) return;
  const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  arr[y][x] = 2;
}

function updateGrid() {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const cell = document.getElementById(`cell-${y}-${x}`);
      const val = arr[y][x];
      cell.textContent = val !== 0 ? val : '';
      if (val === 0) {
        cell.classList.add('zero');
      } else {
        cell.classList.remove('zero');
      }
    }
  }
}

function moveRight() {

	/*let y = 0;
	let x = 0;
	while(y < 4){
		if (x === 4){
			y++;
		}
		else{
			x++;
			while(x < 4){
				if(

				)
			}
		}
	}*/
  for (let y = 0; y < 4; y++) {
    let row = arr[y].filter(n => n !== 0);
    for (let i = row.length - 1; i > 0; i--) {
      if (row[i] === row[i - 1]) {
        row[i] *= 2;
        row[i - 1] = 0;
      }
    }
    row = row.filter(n => n !== 0);
    while (row.length < 4) row.unshift(0);
    arr[y] = row;
  }
}

function moveLeft() {
  for (let y = 0; y < 4; y++) {
    let row = arr[y].filter(n => n !== 0);
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        row[i] *= 2;
        row[i + 1] = 0;
      }
    }
    row = row.filter(n => n !== 0);
    while (row.length < 4) row.push(0);
    arr[y] = row;
  }
}

function moveUp() {
  for (let x = 0; x < 4; x++) {
    let col = [];
    for (let y = 0; y < 4; y++) col.push(arr[y][x]);
    col = col.filter(n => n !== 0);
    for (let i = 0; i < col.length - 1; i++) {
      if (col[i] === col[i + 1]) {
        col[i] *= 2;
        col[i + 1] = 0;
      }
    }
    col = col.filter(n => n !== 0);
    while (col.length < 4) col.push(0);
    for (let y = 0; y < 4; y++) arr[y][x] = col[y];
  }
}

function moveDown() {
  for (let x = 0; x < 4; x++) {
    let col = [];
    for (let y = 0; y < 4; y++) col.push(arr[y][x]);
    col = col.filter(n => n !== 0);
    for (let i = col.length - 1; i > 0; i--) {
      if (col[i] === col[i - 1]) {
        col[i] *= 2;
        col[i - 1] = 0;
      }
    }
    col = col.filter(n => n !== 0);
    while (col.length < 4) col.unshift(0);
    for (let y = 0; y < 4; y++) arr[y][x] = col[y];
  }
}

document.addEventListener('keydown', (e) => {
  let moved = false;
  const before = JSON.stringify(arr);

  if (e.key === 'ArrowRight') moveRight();
  if (e.key === 'ArrowLeft') moveLeft();
  if (e.key === 'ArrowUp') moveUp();
  if (e.key === 'ArrowDown') moveDown();

  const after = JSON.stringify(arr);
  moved = before !== after;

  if (moved) {
    placeRandomTwo();
    updateGrid();
  }
});

initGrid();
