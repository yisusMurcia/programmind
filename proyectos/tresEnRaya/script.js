const boardElement= document.getElementById("grid");
const settingsDiv= document.getElementById("settings");
const turnText= document.getElementById("turn");
const twoPlayersBtn= document.getElementById("players-btn");
const onePlayerBtn= document.getElementById("one-player-btn");
const squaresBtns= document.querySelectorAll("button.square");
const startedBoard= [0, 0, 0, 0, 0, 0, 0, 0, 0];

let twoPlayers;
let machineMoves= [];
onePlayerBtn.addEventListener("click", ()=>{
    boardElement.classList.remove("hidden");
    settingsDiv.classList.add("hidden");
});

twoPlayersBtn.addEventListener("click", ()=>{
    boardElement.classList.remove("hidden");
    settingsDiv.classList.add("hidden");
    twoPlayers= true;
})

const minMax= (board, turn)=>{
    let auxBoard= [].concat(...board);
    let movements= [];
    if (win(board)){
        return win(board);
    }else if(tie(board)){
        return 0;
    }
    for (let i= 0; i< 9; i++){
        if (board[i]== 0){
            auxBoard[i]= turn;
            const puntuation= minMax(auxBoard, turn*(-1));
            movements.push([puntuation, i]);
        };
    };
    if (turn== 1){
        movements.sort((a,b)=>a[0]- b[0]);
        const movement= movements[0];
        machineMoves.push(movement[1]);
        return movement[0];
    }else{
        movements.sort((a,b)=>b[0]- a[0]);
        const movement= movements[0];
        return movement[0];
    };
};

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
        if (twoPlayers){ 
            player*= -1;
        }else{ 
                minMax(board, 1)
                const machineMove= machineMoves[machineMoves.length-1]
                board[machineMove]= 1;
                seeBoard(board);
                turnText.innerText= `Seleccionar casilla ${machineMove +1}`
        };
        if (tie(board) || win(board)){
            turnText.innerText= "Game over";
            if (win(board) && twoPlayers){
                turnText.innerText+= `\nGanador: '${win(board)== 1? "o": "x"}'`;
            };
            //Restaurar todo
            //Restore everything
            board= [].concat(...startedBoard);
            settingsDiv.classList.remove("hidden");
        };
    });
};

let board= [].concat(...startedBoard);
player= -1;