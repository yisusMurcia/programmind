let numOfThrows= document.getElementById("numOfThrows");
let minNum= document.getElementById("minNum");
let maxNum= document.getElementById("maxNum");
let checkInputs=()=>{
    throwValue= Math.round(numOfThrows.value);
    if (throwValue<=0){
        numOfThrows.value= 1;
    };
    if(minNum.value== ""){
        minNum.value= 0;
    };
    if(+maxNum.value<= +minNum.value || maxNum.value== ""){
        maxNum.value= +minNum.value+1;
    };
};
minNum.addEventListener("change", ()=>{checkInputs();});
maxNum.addEventListener("change", ()=>{checkInputs();})
numOfThrows.addEventListener("change", ()=>{checkInputs})
let resultP= document.getElementById("result");
let button= document.querySelector("#generate");
let generateNums=()=>{
    let throws= +numOfThrows.value;
    let max= +maxNum.value;
    let min= +minNum.value;
    let results=[];
    for (let i=0; i<throws; i++){
        let num= Math.round(Math.random()*(max- min)+min);
        results.push(num);
    };
    let total= results.reduce((sum, num)=>{
        return sum+num;
    });
    resultP.innerHTML= "Suma de los números generados: "+ total+"<br> Números generados: <br>"+ results.join("<br>");
};
button.addEventListener("click", ()=>{
    generateNums();
});