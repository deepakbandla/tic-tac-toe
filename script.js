let buttons = document.querySelectorAll('.gameboard button');
let turn = document.querySelector(".turn");
let x_score = document.querySelector('.x_scores span');
let o_score = document.querySelector('.o_scores span');
let reset = document.querySelector(".reset");

let player_1_turn = true;
let gameOver = false;

function all_reset() {
    buttons.forEach((btn) => {
        btn.textContent = "";
        btn.disabled = false; 
    });
    turn.textContent = "Player 1's turn";
    player_1_turn = true;
    gameOver = false;
}

function check() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        const valA = buttons[a].textContent;
        const valB = buttons[b].textContent;
        const valC = buttons[c].textContent;
        if (valA && valA === valB && valA === valC) {
            buttons[a].style.backgroundColor = "#f7c59f";
            buttons[b].style.backgroundColor = "#f7c59f";
            buttons[c].style.backgroundColor = "#f7c59f";
            return valA; 
        }
    }
    return null;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent || gameOver) return;

        btn.textContent = player_1_turn ? "X" : "O";

        let winner = check();
        if (winner) {
            gameOver = true;
            turn.textContent = `Player ${winner === "X" ? "1" : "2"} wins!`;

            if (winner === "X") {
                x_score.textContent = parseInt(x_score.textContent) + 1;
            } else {
                o_score.textContent = parseInt(o_score.textContent) + 1;
            }

            
            buttons.forEach(btn => btn.disabled = true);
            return;
        }

        const isDraw = [...buttons].every(btn => btn.textContent !== "");
        if (isDraw) {
            gameOver = true;
            turn.textContent = "It's a draw!";
            return;
        }

        player_1_turn = !player_1_turn;
        turn.textContent = `Player ${player_1_turn ? "1" : "2"}'s turn`;
    });
});

reset.addEventListener('click', () => {
    buttons.forEach(btn => btn.style.backgroundColor = "#d3f0e8");
    all_reset();
});
