//Probabilidad de mejora, entre 0 y 1
//Boast chance, between 0 and 1
let getABoast=(num)=>{
    return Math.random< num;
};
class Character{
    constructor(name, live, damage, critic, criticNum, heal, healNum){
        this.name= name;
        this.live= live;
        this.maxLive= live;
        this.damage= damage;
        this.critic= critic;
        this.criticNum= criticNum;
        this.heal= heal;
        this.healNum= healNum;
    };
    attack(enemy){
        let attack= this.damage;
        if(getABoast(this.criticNum)){
            attack= this.critic;
        };
        enemy.live-= attack;
    };
    heal(){
        let heal= 20;
        if (getABoast(this.healNum)){
            heal= this.heal;
        };
        this.live+= heal;
        //La curación no puede sobrepasar la vida máxima
        //The healing can´t be greater than the max live
        if (this.live> this.maxLive){
            this.live= this.maxLive;
        };
    };
};
//Crear clases para los personajes
//Create class of the characters
class Ninja extends Character{
    constructor(name, live, damage, critic, criticNum, heal, healNum){
        super("Ninja", 300, 25, 40, 0.25, 45, 0.2);
    };
};
class Gentleman extends Character{
    constructor(name, live, damage, critic, criticNum, heal, healNum){
        super("Gentleman", 750, 10, 50, 0.2, 60, 0.7);
    };
};
class Raptor extends Character{
    constructor(name, live, damage, critic, criticNum, heal, healNum){
        super("Raptor", 400, 20, 40, 0.25, 45, 0.2);
    };
};
class Caveman extends Character{
    constructor(name, live, damage, critic, criticNum, heal, healNum){
        super("Caveman", 600, 15, 20, 0.2, 50, 0.5);
    };
};
const characters= [Ninja, Gentleman, Raptor, Caveman];
//Definir botones
//define buttons
const readyButton= document.querySelector("#ready");
//Establecer los personajes de los jugadores
//Set player´s characters
let player1;
let player2
const setCharacters=()=>{
    //Player 1
    player1 = new characters[document.querySelector("#player1").value];
    let title1= document.querySelector("#player1Title");
    title1.innerHTML= `${player1.name}: ${player1.live}`;
    //Player 2
    player2 = new characters[document.querySelector("#player2").value];
    let title2= document.querySelector("#player2Title");
    title2.innerHTML= `${player2.name}: ${player2.live}`;
    readyButton.replaceWith(document.createElement("br"));
};
//Configurar botones
//Set buttons
readyButton.addEventListener("click", ()=>{
    setCharacters();
    readyButton.removeEventListener("click");
});