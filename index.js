/*Instructions
- Create a board with 10 spaces in it
- Add a mine to one of these spaces
- Ask the user to enter an index for the board
- They will keep entering indices until they either hit a mine and lose, or clear all the empty spaces and win
- When the game ends, let them know the outcome, including how many spaces they managed to clear before losing/winning*/


const board = ['','','','','','','','','',];
const mine = "mine";
board.push(mine);
const index = prompt("enter your index")
console.log(board);

for (let i = 0; i < board.length; i++){
    if (board[index] === mine){
        alert ('you lost');
    } else (board[index] < mine) 
        alert ('you survive');
}