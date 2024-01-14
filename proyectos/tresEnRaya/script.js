const turnText= document.getElementById("turn");
const twoPlayersBtn= document.getElementById("players-btn");
const onePlayerBtn= document.getElementById("one-player-btn");
const squaresBtns= document.querySelectorAll("button.square");
const startedBoard= [0, 0, 0, 0, 0, 0, 0, 0, 0];

const seeBoard= (board)=>{
    for(let i=0; i<board.length; i++){
        squaresBtns[i].innerText= board[i]== 1? "o": board[i]== -1? "x": " ";
    };
};

const mark=(board, num)=>{
    if (board[num]== 0){
        board[num]= player;
        return board;
    }else{
        return mark(board, num);
    }
};

const declareTurn=(turn)=>{
    turnText.innerText= `Turno de '${turn== 1? "o": "x"}'`
}

for (let button of squaresBtns){
    button.addEventListener("click", ()=>{
        board= mark(board,  button.id, player)
        declareTurn(player);
        seeBoard(board);
        player*= -1;
    });
};

let board= [].concat(...startedBoard);
player= 1;