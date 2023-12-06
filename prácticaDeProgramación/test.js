const checkAnswer= (answer, paragraph)=>{
    let input= document.querySelector(answer);
    if (input.checked){
        paragraph.innerHTML= `Correcto`; 
    }else{
        paragraph.innerHTML= "Intenta otra vez";
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
let addQuestion=(section, question)=>{
    const div= document.createElement("div");
    div.setAttribute("class", "codeQuestion");
    const title= document.createElement("h3");
    title.innerHTML= q1.tema;
    div.appendChild(title);
    const questionP= document.createElement("p");
    questionP.innerHTML= q1.question;
    div.appendChild(questionP)
    const answerContainer= document.createElement("form");
    answerContainer.setAttribute("class", section.getAttribute("class"));
    div.appendChild(answerContainer);
    for (let i= 0; i< q1.options.length; i++){
        const answerFiledset= document.createElement("fieldset");
        const input= document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", q1.tema+i);
        input.setAttribute("name", q1.tema);
        answerFiledset.appendChild(input);
        answerContainer.appendChild(answerFiledset);
        const label= document.createElement("label");
        label.innerHTML= q1.options[i];
        label.setAttribute("name", q1.tema);
        label.setAttribute("for", q1.tema+i);
        answerFiledset.appendChild(label);
    };
    let paragraph= document.createElement("p");
    paragraph.setAttribute("class", "answer");
    paragraph.setAttribute("id", `answer${q1.tema}`);
    paragraph.innerHTML="Trata de responder";
    div.appendChild(paragraph);
    const answerButton= document.createElement("button");
    answerButton.innerHTML="Ver Respuesta";
    answerButton.addEventListener("click", ()=>{paragraph.innerHTML= q1.explicación});
    div.appendChild(answerButton);
    const checkAnswerButton= document.createElement("button");
    checkAnswerButton.innerHTML= "Revisar";
    checkAnswerButton.addEventListener("click", ()=>{checkAnswer(q1.tema+q1.answer, paragraph)})
    div.appendChild(checkAnswerButton);
    section.appendChild(div);
};
addQuestion(programmingConceptsSection, q1);
/*
*/