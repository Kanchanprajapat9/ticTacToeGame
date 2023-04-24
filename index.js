var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function play(cell) {
	if (board[cell.id] === "") {
		cell.innerText = currentPlayer;
		board[cell.id] = currentPlayer;
		checkWin();
		changePlayer();
	}
}

function changePlayer() {
	if (currentPlayer === "X") {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}
}

function checkWin() {
	var winningCombos = [		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (var i = 0; i < winningCombos.length; i++) {
		var combo = winningCombos[i];
		if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
			alert(currentPlayer + " wins!");
			reset();
			return;
		}
	}

	if (board.indexOf("") === -1) {
		alert("It's a tie!");
		reset();
	}
}

function reset() {
	currentPlayer = "X";
	board = ["", "", "", "", "", "", "", "", ""];
	var cells = document.getElementsByClassName("cell");
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = "";
	}
}
 
var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", function() {
		play(this);
	});
}
