//Guardar y eleminar las explicaciónes
let answers= document.querySelectorAll(".answer");
let answersExplain= [];
for (let element of answers){
    answersExplain.push(element.innerText)
    element.innerHTML= "";
};
//pregunta JS operación de residuo
let js1= "js1O2";
let buttonJs1= document.querySelector(`.buttonJs1`);
let js1Answer= document.querySelector(`#js1Answer`);
buttonJs1.addEventListener("click",()=>{
    let input= document.querySelector(`#${js1}`);
    if (input.checked){
        js1Answer.innerHTML= "Correcto <br>"+ answersExplain[0];
    }else{
        js1Answer.innerHTML= "intentalo otra vez";
    };
});
//Pregunta JS array e index
let js2= "js2O1";
let buttonJs2= document.querySelector(`.buttonJs2`);
let js2Answer= document.querySelector(`#js2Answer`);
buttonJs2.addEventListener("click",()=>{
    let input= document.querySelector(`#${js2}`);
    if (input.checked){
        js2Answer.innerHTML= "Correcto <br>"+ answersExplain[1];
    }else{
        js2Answer.innerHTML= "intentalo otra vez";
    };
});
//Pregunta JS array y string
let js3= "js3O3";
let buttonJs3= document.querySelector(`.buttonJs3`);
let js3Answer= document.querySelector(`#js3Answer`);
buttonJs3.addEventListener("click",()=>{
    let input= document.querySelector(`#${js3}`);
    if (input.checked){
        js3Answer.innerHTML= "Correcto <br>"+ answersExplain[2];
    }else{
        js3Answer.innerHTML= "intentalo otra vez";
    };
});