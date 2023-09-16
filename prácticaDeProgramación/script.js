let question1= "q1O2";
let button1= document.querySelector(`.button1`);
let answer1= document.querySelector(`.answer1`);
button1.addEventListener("click",()=>{
    let input= document.querySelector(`#${question1}`);
    if (input.checked){
        answer1.innerHTML= "Correcto";
    }else{
        answer1.innerHTML= "intentalo otra vez";
    };
});
let question2= "q2O1";
let button2= document.querySelector(`.button2`);
let answer2= document.querySelector(`.answer2`);
button2.addEventListener("click",()=>{
    let input= document.querySelector(`#${question2}`);
    if (input.checked){
        answer2.innerHTML= "Correcto";
    }else{
        answer2.innerHTML= "intentalo otra vez";
    };
});