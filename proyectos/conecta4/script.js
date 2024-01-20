const boardDiv= document.getElementById("grid7x7");
const turnText= document.getElementById("turn");
const playButtons= document.querySelectorAll("#controls>button");

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
            while (num> 0 && board[num]== player){
                num-= 7;
            };
            //Set the start of the 4 line
            //establecer el inicio de la línea de 4
            num+=7;
            while(board[num]== player){
                count++;
                num+=7;
            };
            if(count== 4){
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
            if(count== 4){
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
                        if(count== 4){
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
};

const declareTurn= (player)=>{
    turnText.innerText= `Turno de ${player==1? 'o':'x'}`
}

let player= -1;
let board= createNewBoard();

for(let button of playButtons){
    button.addEventListener("click",()=>{
        board= play(board, Number(button.id), player);
        seeBoard(board);
        player*=-1;
        declareTurn(player);
        if(win(board)){
            turnText.innerText="Game over";
            board= createNewBoard();
        };
    });
};