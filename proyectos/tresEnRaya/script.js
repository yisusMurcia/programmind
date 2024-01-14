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

const tie=(board)=>{
    const end= board.indexOf(0);
    if (end==-1){
        return true;
    };
};

const win= (board)=>{
    const winPoints= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let point of winPoints){
        if (board[point[0]]== 0){
            continue;
        };
        if (board[point[0]]== board[point[1]] && board[point[1]]== board[point[2]]){
            //Mostrar linea
            //Show line
            point.forEach((num)=>squaresBtns[num].style.color= "purple");
            
            return board[point[0]];
        }
    }
}

for (let button of squaresBtns){
    button.addEventListener("click", ()=>{
        board= mark(board,  button.id, player)
        declareTurn(player);
        seeBoard(board);
        player*= -1;
        if (tie(board) || win(board)){
            turnText.innerText= "Game over";
            if (win(board)){
                turnText.innerText+= `\nGanador: '${win(board)== 1? "o": "x"}'`;
            }
            board= [].concat(...startedBoard)
        };
    });
};

let board= [].concat(...startedBoard);
player= 1;