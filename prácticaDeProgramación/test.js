const seeAnswer= (obj, paragraph)=>{
    paragraph.innerHTML= `Respuesta: ${obj.answer+1} <br> ${obj.explication}`
}
const checkAnswer= (answer, text)=>{
    let input= document.querySelector(`#${answer}`);
    if (!input.checked){
        return text.innerHTML= "Correcto";
    };
        text.innerHTML= "Intenta otra vez";
};
let addQuestion=(section, obj)=>{
    const div= document.createElement("div");
    div.setAttribute("class", "codeQuestion");
    const title= document.createElement("h3");
    //Reemplazar - por espacio
    let subjectText= obj.subject.split("-");
    title.innerHTML= subjectText.join(" ");
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
        input.setAttribute("id", obj.subject+i);
        input.setAttribute("name", obj.subject);
        answerFiledset.appendChild(input);
        answerContainer.appendChild(answerFiledset);
        const label= document.createElement("label");
        label.innerHTML= obj.options[i];
        label.setAttribute("name", obj.subject);
        label.setAttribute("for", obj.subject+i);
        answerFiledset.appendChild(label);
    };
    let paragraph= document.createElement("p");
    paragraph.setAttribute("class", "answer");
    paragraph.setAttribute("id", `answer${obj.subject}`);
    paragraph.innerHTML="Trata de responder";
    div.appendChild(paragraph);
    const answerButton= document.createElement("button");
    answerButton.innerHTML="Ver Respuesta";
    answerButton.addEventListener("click", ()=>{seeAnswer(obj, paragraph)});
    div.appendChild(answerButton);
    const checkAnswerButton= document.createElement("button");
    checkAnswerButton.innerHTML= "Revisar";
    checkAnswerButton.addEventListener("click", ()=>{checkAnswer((obj.subject+ obj.answer), paragraph)})
    div.appendChild(checkAnswerButton);
    section.appendChild(div);
};
const programmingConceptsSection= document.querySelector("#questionsProgrammingConcepts");
let q2= {
    subject: "Funciones-Recursivas",
    question: "¿Qué significa que una función sea recursiva?",
    options: [
        "Una función que no puede terminar",
        "Una función más eficiente que otra función que hace el mismo trabajo",
        "Una función basada en la iteración",
        "Una función que se llama a si misma"
    ],
    answer: "3",
    explication: "Una función recursiva es una función que se ejecuta dentro de esta dada ciertas condiciones."
};
let q1= {
    subject: "POO",
    question: "¿Qué significa las siglas POO?",
    options: [
        "Significa: programación orientada a operaciones",
        "Significa: programación orientada a objetos",
        "Significa: procesos de operaciones entre objetos",
        "Significa: priorización de objetos sobre operaciones"
    ],
    answer: 1,
    explication: "POO se refiere a una forma de programación basda en el concepto de objetos, una programación orientada a objetos"
};
addQuestion(programmingConceptsSection, q2);
/*
*/