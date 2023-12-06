const seeAnswer= (obj, paragraph)=>{
    paragraph.innerHTML= `Respuesta: ${obj.answer+1} <br> ${obj.explicación}`
}
const checkAnswer= (answer, text)=>{
    let input= document.querySelector(`#${answer}`);
    if (input.checked){
        text.innerHTML= `Correcto`; 
    }else{
        text.innerHTML= "Intenta otra vez";
    };
}
const programmingConceptsSection= document.querySelector("#questionsProgrammingConcepts");
let q1= {
    tema: "POO",
    question: "¿Qué significa las siglas POO?",
    options: [
        "Significa: programación orientada a operaciones",
        "Significa: programación orientada a objetos",
        "Significa: procesos de operaciones entre objetos",
        "Significa: priorización de objetos sobre operaciones"
    ],
    answer: 1,
    explicación: "POO se refiere a una forma de programación basda en el concepto de objetos, una programación orientada a objetos"
};
let addQuestion=(section, obj)=>{
    const div= document.createElement("div");
    div.setAttribute("class", "codeQuestion");
    const title= document.createElement("h3");
    title.innerHTML= obj.tema;
    div.appendChild(title);
    const questionP= document.createElement("p");
    questionP.innerHTML= obj.question;
    div.appendChild(questionP)
    const answerContainer= document.createElement("form");
    answerContainer.setAttribute("class", section.getAttribute("class"));
    div.appendChild(answerContainer);
    for (let i= 0; i< obj.options.length; i++){
        const answerFiledset= document.createElement("fieldset");
        const input= document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", obj.tema+i);
        input.setAttribute("name", obj.tema);
        answerFiledset.appendChild(input);
        answerContainer.appendChild(answerFiledset);
        const label= document.createElement("label");
        label.innerHTML= obj.options[i];
        label.setAttribute("name", obj.tema);
        label.setAttribute("for", obj.tema+i);
        answerFiledset.appendChild(label);
    };
    let paragraph= document.createElement("p");
    paragraph.setAttribute("class", "answer");
    paragraph.setAttribute("id", `answer${obj.tema}`);
    paragraph.innerHTML="Trata de responder";
    div.appendChild(paragraph);
    const answerButton= document.createElement("button");
    answerButton.innerHTML="Ver Respuesta";
    answerButton.addEventListener("click", ()=>{seeAnswer(obj, paragraph)});
    div.appendChild(answerButton);
    const checkAnswerButton= document.createElement("button");
    checkAnswerButton.innerHTML= "Revisar";
    checkAnswerButton.addEventListener("click", ()=>{checkAnswer((obj.tema+obj.answer), paragraph)})
    div.appendChild(checkAnswerButton);
    section.appendChild(div);
};
addQuestion(programmingConceptsSection, q1);
/*
*/