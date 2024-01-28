const boardDiv= document.getElementById("grid7x7");
const consoleEl= document.getElementById("console");
const turnText= document.getElementById("turn");
const playButtons= document.querySelectorAll("#controls>button");
const twoPlayersBtn= document.getElementById("players-btn");
const onePlayerBtn= document.getElementById("one-player-btn");
const settingsDiv= document.getElementById("settings")

//Preparar juego
//Set game
const setGame=()=>{
    settingsDiv.classList.add("hidden");
    consoleEl.classList.remove("hidden");
};

twoPlayersBtn.addEventListener("click", ()=>{
    setGame();
    twoPlayers= true;
});
onePlayerBtn.addEventListener("click", ()=>{
    setGame();
});

let twoPlayers= false;

const createNewBoard= ()=>{
    const arr= [];
    for (let i= 0; i< 49; i++){
        arr.push(0)
    };
    return arr;
};

const seeBoard= (board)=>{
    boardDiv.innerHTML= "";
    for (let i= 6; i>= 0; i--){
        const line= [];
        for (let j= 0; j< 7; j++){
            const value= board[i*7+j];
            switch (value){
                case 1:
                    line.push("o");
                    break;
                case -1:
                    line.push("x");
                    break;
                default: line.push("-")
            };
        };
        line.forEach((val)=>{
            const p= document.createElement("p");
            p.textContent= val;
            boardDiv.appendChild(p);
        });
    };
};

const play= (board, column, player)=>{
    for (let i= 0; i< 7; i++){
        if(board[(7*i)+column]== 0){
            board[(7*i)+column]= player;
            return board;
        };
    };
};

const win=(board)=>{
    for(let i= 0; i< 7; i++){
        //Vertical
        if(board[21+i]!= 0){
            let count= 0;
            const player= board[21+i];
            let num= 21+i;
            while (num>= 0 && board[num]== player){
                num-= 7;
            };
            //Set the start of the 4 line
            //establecer el inicio de la línea de 4
            num+=7;
            while(board[num]== player){
                count++;
                num+=7;
            };
            if(count>= 4){
                return true;
            };
        };
        //Horizontal
        for(let j= 0; j<7; j++){
            let count= 0;
            const player= board[i*7+3];
            if (board[7*i+3]==0){
                break;
            };
            let num= i*7+3;
            while (board[num]== player && num>= i*7){
                num--;
            };
            num++;
            while(board[num]== player){
                count++;
                num++;
            };
            if(count>= 4){
                return true;
            };
        };
    };
    //Diagonal
    let diagonalPoints= [
        [21, 3],
        [21, 45],
        [27, 3],
        [27, 45],
        [22, 10],
        [22, 38],
        [26, 10],
        [26, 38],
        [23, 17],
        [23, 31],
        [25, 17],
        [25, 31],
        [24, 24]
    ];
    for(let points of diagonalPoints){
        let potentialDiagonal= false;
        let player;
        if(board[points[0]]== 0){
            continue;
        };
        if(board[points[0]]== board[points[1]]){
            player= board[points[0]];
            potentialDiagonal= true;
        };
        if(potentialDiagonal){
            //Obtener el inicio de la línea
            //Get the start of the line
            const pointDistances= [6, 8];
            for(let distance of pointDistances){
                let count= 0;
                let i= points[0];
                while (board[i]== player && i>= 0){
                    i-= distance
                };
                i+= distance
                while(i< 49){
                    if(board[i]== player){
                        count++;
                        if(count>= 4){
                            return true;
                        };
                    }else{
                        break;
                    };
                    i+= distance;
                };
            };
        };
    };
    //Empate
    //Tie
    const ceroIndex= board.indexOf(0)
    if(ceroIndex== -1){
        return "tie";
    };
};

const declareTurn= (player)=>{
    turnText.innerText= `Turno de '${player==1? 'o':'x'}'`
};

//Movimiento de las máquinas
//Machine moves
const evaluateBoard=(board, player)=>{
    let count2= 0;
    let count3= 0;
    let count4= 0;
    const enemy= player*-1
    for(let i= 0; i< 7; i++){
        //Vertical
        if(board[21+i]!= enemy){
            let count= 0;
            let num= 21+i;
            while (num>= 0 && board[num]!= enemy){
                num-= 7;
            };
            num+=7;
            while(num<= 41+i){
                if(board[num]!= enemy){
                    count++;
                    num+=7;
                }else{
                    if(count>3){
                        count4++;
                    };
                    count= 0;
                    break
                };
            };
            switch (count) {
                case count== 1 || count== 0:
                    break;
                case count== 2:
                    count2++;
                case count== 3:
                    count3++;
                default:
                    count4++;
            };
        };
        //Horizontal
        if (board[7*i+3]!=enemy){
            let count= 0
            let num= i*7+3;
            while (num>= i*7 && board[num]!= enemy){
                num--;
            };
            num++;
            while(num< (i+1)*7){
                if(board[num]!= enemy){
                    count++;
                    num++;
                }else{
                    if (count>3){
                        count4+=1;
                    };
                    count= 0;
                    break;
                };
            };
            switch (count) {
                case count== 1 || count== 0:
                    break;
                case count== 2:
                    count2++;
                case count== 3:
                    count3++;
                default:
                    count4++;
            };
        };
    };
    //Diagonal
    let diagonalPoints= [
        [21, 3],
        [21, 45],
        [27, 3],
        [27, 45],
        [22, 10],
        [22, 38],
        [26, 10],
        [26, 38],
        [23, 17],
        [23, 31],
        [25, 17],
        [25, 31],
        [24, 24]
    ];
    for(let points of diagonalPoints){
        if(board[points[0]]!= enemy && board[points[0]]== board[points[1]]){
            //Obtener el inicio de la línea
            //Get the start of the line
            const pointDistances= [6, 8];
            for(let distance of pointDistances){
                let count= 0;
                let i= points[0];
                while (i>= 0 && board[i]!= enemy){
                    i-= distance
                };
                i+= distance
                while(i< 49){
                    if(board[i]!= enemy){
                        count++;
                        i+= distance;
                    }else{
                        if(count>= 3){
                            count4++;
                        };
                        count= 0;
                        break;
                    };
                };
                switch (count) {
                    case count== 1 || count== 0:
                        break;
                    case count== 2:
                        count2++;
                    case count== 3:
                        count3++;
                    default:
                        count4++;
                };
            };
        };
    };
    return count2*2+ count3*9+ count4*100;
};

const machineMoves= []
const minMax= (board, player, count)=>{
    let movements=[];
    if(win(board) && win(board)== "tie"){
        return 1000*player*-1/count;
    }else if(count== 4){
        return evaluateBoard(board, player)- evaluateBoard(board, player*-1);
    };
    for (let i= 0; i<7; i++){
        let auxBoard= [].concat(board);
        const markedBoard = play(auxBoard, player, i);
        if(markedBoard === auxBoard){
            continue
        };
        auxBoard= markedBoard;
        puntuation= minMax(auxBoard, player*-1, count+1);
        movements.push([puntuation, i]);
    };
    movements.sort((a,b)=> a[0]- b[0])
    if (player== 1){
        const movement= movements[0];
        machineMoves.push(movement[1]);
        return movement[0];
    }else{
        movements.reverse();
        const movement= movements[0];
        return movement[0];
    };
};

let player= JSON.parse(localStorage.getItem("player"))||-1;
let board= JSON.parse(localStorage.getItem("board")) ||createNewBoard();

for(let button of playButtons){
    button.addEventListener("click",()=>{
        const copyBoard= [].concat(board);
        board= play(board, Number(button.id), player);
        if(board== undefined){
            //Si el tablero no cambia, evitar cambio de turno
            //If the board doesn't change, avoid turn change
            board= copyBoard;
        }else{
            player*=-1;
        };
        seeBoard(board);
        declareTurn(player);
        if(win(board)){
            turnText.innerText="Game over";
            if (win(board)!= "tie"){
                turnText.innerText+= `\nGanador: ${win(board)==1? 'o': 'x'}`;
            };
            board= createNewBoard();
        };
        localStorage.setItem("board", JSON.stringify(board));
        localStorage.setItem("player", JSON.stringify(player));
    });
};

seeBoard(board);
declareTurn(player)