let buttons = document.querySelectorAll('.gameboard button');
let turn=document.querySelector(".turn");
let x_score=document.querySelector('x_scores span');
let o_score=document.querySelector('o_scores span');

let player_1_turn=true;
let player_2_turn=false;

// function check(buttons){
//     if (buttons[i].textContent==buttons[i+1].textContent==buttons[i+2].textContent) {
//         if (buttons[i].textContent=="X") {
//             x_score=x_score+1;
//         }
//         else if (buttons[i].textContent=="O") {
//             o_score=o_score+1;
//         }
//     }
// }

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if (player_1_turn==true) {
            btn.textContent="X";
            // check();
            player_1_turn=false;
            player_2_turn=true;
            turn.textContent="Player 2's turn";
        }
        else if (player_2_turn==true) {
            btn.textContent="O";
            // check();
            player_2_turn=false;
            player_1_turn=true;
            turn.textContent="Player 1's turn";
        }
    })
})




let reset = document.querySelector(".reset");

reset.addEventListener('click', ()=>{
    buttons.forEach((btn)=>{
        btn.textContent="";
        turn.textContent="Player 1's turn";
        player_2_turn=false;
        player_1_turn=true;
    })
})