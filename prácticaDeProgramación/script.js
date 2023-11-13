//Guardar y eleminar las explicaciónes
let answers= document.querySelectorAll(".answer");
let answersExplain= [];
for (let element of answers){
    answersExplain.push(element.innerText)
    element.innerHTML= "";
};

//Pregunta programación POO
let prg1= "q1o2";
let buttonQ1= document.querySelector(`.bottonProgramm1`);
let seeAnswerQ1= document.querySelector(`.seeProgrammingAnswer1`);
let answerQ1= document.querySelector(`#programmingAnswer1`)
buttonQ1.addEventListener(`click`, ()=>{
    let input= document.querySelector(`#${prg1}`);
    if(input.checked){
        answerQ1.innerHTML= "Correcto<br>"+ answersExplain[0];
    }else{
        answerQ1.innerHTML= "Intentalo otra vez";
    };
});
seeAnswerQ1.addEventListener("click", ()=>{
    answerQ1.innerHTML= answersExplain[0];
});
//Pregunta programación funciones recursivas
let prg2= "q2o4";
let buttonQ2= document.querySelector(`.bottonProgramm2`);
let seeAnswerQ2= document.querySelector(`.seeProgrammingAnswer2`);
let answerQ2= document.querySelector(`#programmingAnswer2`)
buttonQ2.addEventListener("click", ()=>{
    let input= document.querySelector(`#${prg2}`);
    if(input.checked){
        answerQ2.innerHTML= "Correcto<br>"+ answersExplain[1];
    }else{
        answerQ2.innerHTML= "Intentalo otra vez";
    };
});
seeAnswerQ2.addEventListener("click", ()=>{
    answerQ2.innerHTML= answersExplain[1];
});
//Pregunta programación funciones
let prg3= "q3o1";
let buttonQ3= document.querySelector(`.bottonProgramm3`);
let seeAnswerQ3= document.querySelector(`.seeProgrammingAnswer3`);
let answerQ3= document.querySelector(`#programmingAnswer3`)
buttonQ3.addEventListener(`click`, ()=>{
    let input= document.querySelector(`#${prg3}`);
    if(input.checked){
        answerQ3.innerHTML= "Correcto<br>"+ answersExplain[2];
    }else{
        answerQ3.innerHTML= "Intentalo otra vez";
    };
});
seeAnswerQ3.addEventListener("click", ()=>{
    answerQ3.innerHTML= answersExplain[2];
});
//pregunta JS operación de residuo
let js1= "js1O2";
let buttonJs1= document.querySelector(`.buttonJs1`);
let seeAnswerJs1= document.querySelector(`.seeAnswerJs1`);
let js1Answer= document.querySelector(`#js1Answer`);
buttonJs1.addEventListener("click",()=>{
    let input= document.querySelector(`#${js1}`);
    if (input.checked){
        js1Answer.innerHTML= "Correcto <br>"+ answersExplain[3];
    }else{
        js1Answer.innerHTML= "intentalo otra vez";
    };
});
seeAnswerJs1.addEventListener("click", ()=>{
    js1Answer.innerHTML= answersExplain[3];
});
//Pregunta JS array e index
let js2= "js2O1";
let buttonJs2= document.querySelector(`.buttonJs2`);
let seeAnswerJs2= document.querySelector(`.seeAnswerJs2`);
let js2Answer= document.querySelector(`#js2Answer`);
buttonJs2.addEventListener("click",()=>{
    let input= document.querySelector(`#${js2}`);
    if (input.checked){
        js2Answer.innerHTML= "Correcto <br>"+ answersExplain[4];
    }else{
        js2Answer.innerHTML= "intentalo otra vez";
    };
});
seeAnswerJs2.addEventListener("click", ()=>{
    js2Answer.innerHTML= answersExplain[4];
});
//Pregunta JS array y string
let js3= "js3O3";
let buttonJs3= document.querySelector(`.buttonJs3`);
let seeAnswerJs3= document.querySelector(`.seeAnswerJs3`);
let js3Answer= document.querySelector(`#js3Answer`);
buttonJs3.addEventListener("click",()=>{
    let input= document.querySelector(`#${js3}`);
    if (input.checked){
        js3Answer.innerHTML= "Correcto <br>"+ answersExplain[5];
    }else{
        js3Answer.innerHTML= "intentalo otra vez";
    };
});
seeAnswerJs3.addEventListener("click", ()=>{
    js3Answer.innerHTML= answersExplain[5];
});
//Pregunta JS in + string
let js4= "js4O3";
let buttonJs4= document.querySelector(`.buttonJs4`);
let seeAnswerJs4= document.querySelector(`.seeAnswerJs4`);
let js4Answer= document.querySelector(`#js4Answer`);
buttonJs4.addEventListener("click",()=>{
    let input= document.querySelector(`#${js4}`);
    if (input.checked){
        js4Answer.innerHTML= "Correcto <br>"+ answersExplain[6];
    }else{
        js4Answer.innerHTML= "intentalo otra vez";
    };
});
seeAnswerJs4.addEventListener("click", ()=>{
    js4Answer.innerHTML= answersExplain[6];
});
//Pregunta JS Funciones dentor de funciones
let js5= "js5O4";
let buttonJs5= document.querySelector(`.buttonJs5`);
let seeAnswerJs5= document.querySelector(`.seeAnswerJs5`);
let js5Answer= document.querySelector(`#js5Answer`);
buttonJs5.addEventListener("click",()=>{
    let input= document.querySelector(`#${js5}`);
    if (input.checked){
        js5Answer.innerHTML= "Correcto <br>"+ answersExplain[7];
    }else{
        js5Answer.innerHTML= "intentalo otra vez";
    };
});
seeAnswerJs5.addEventListener("click", ()=>{
    js5Answer.innerHTML= answersExplain[7];
});