const seeAnswer= (obj, paragraph)=>{
    paragraph.innerHTML= `Respuesta: ${obj.answer+1} <br> ${obj.explication}`
}
const checkAnswer= (answer, text)=>{
    let input= document.querySelector(`#${answer}`);
    if (input.checked){
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
let q2= {
    subject: "Funciones-Recursivas",
    question: "¿Qué significa que una función sea recursiva?",
    options: [
        "Una función que no puede terminar",
        "Una función más eficiente que otra función que hace el mismo trabajo",
        "Una función basada en la iteración",
        "Una función que se llama a si misma"
    ],
    answer: 3,
    explication: "Una función recursiva es una función que se ejecuta dentro de esta dada ciertas condiciones."
};
let q3= {
    subject: "Funciones",
    question: "¿Para qué sirven las funciones?",
    options: [
        "Sirven para reutilizar una parte del código",
        "Sirven para realizar tareas complejas de forma sencilla",
        "Mejora el rendimiento del código",
        "Sirven para organizar el código"
    ],
    answer: 0,
    explication: "Una función se emplea para dividir una parte del código qy que se pueda reutilizar después."
};
let q4={
    subject: "Residuos",
    question: `
    <code>
        let num= prompt("Ingresa un número:");
    </code><br>¿Cómo se verifica si es par o impar?`,
    options: [
        `<code>
        if (num== 2){<br>
            console.log("par");<br>
        }else{<br>
            console.log("impar");<br>
        };
        </code>`,
        `<code>
        if (num%2== 0){<br>
            console.log("par");<br>
        }else{<br>
            console.log("impar");<br>
        };
        </code>`,
        `<code>
        if (num%2== 0){<br>
            console.log("impar");<br>
        }else{<br>
            console.log("par");<br>
        };
        </code>`
    ],
    answer: 1,
    explication: "Para verificar que un número sea par o impar, se obtiene el residuo de la división del número entre 2,"
};
let q5={
    subject: "Array-e-index",
    question: `<code>
        function buscar(array, valor){<br>
            for (let i = 0; i < array.length; i++){<br>
            if (array[i] == valor){<br>
                return i;<br>
            };<br>
            };<br>
            return -1;<br>
        };<br>
        console.log(buscar([1, 2, 3, 4, 5], 3));
    </code><br>
    <p>¿Cúal es la salida del código?</p>`,
    options: [
        2,
        3,
        1,
        -1
    ],
    answer: 0,
    explication: "El código analiza todo el array buscando el elemento 3, y retorna el index del elemento, 3 está en la tercera posción, pero el index inicia desde 0, por lo que se le quita 1 a 3."
};
let q6= {
    subject: "Array",
    question: `<code>
        let cadena= "Hola, mundo";<br>
        let resultado = "";<br>
        for (let i = cadena.length - 1; i >= 0; i--) {<br>
            resultado += cadena[i];<br>
        };<br>
        console.log(resultado);<br>
    </code><br>
    <p>¿Cúal es la salida del código?</p>`,
    options: [
        "mundo",
        "Hola",
        "mundo, Hola",
        "Hola, mundo"
    ],
    answer: 2,
    explication: 'El código toma el texto "Hola, mundo" e invierte el orden de las palabras a través del for loop',
};
let q7={
    subject: "In-y-strings",
    question: `<code>
        function myFunc(cadena) {<br>
            let count = 0;<br>
            for (let i = 0; i < cadena.length; i++) {<br>
            if (cadena[i] in "aeiou") {<br>
                count += 1;<br>
            }<br>
            }<br>
            return count;<br>
        }<br>
        console.log(myFun("Hola, mundo"));
    </code><br>
    <p>¿Cúal es la salida del código?</p>`,
    options: [
        0,
        11,
        4,
        3
    ],
    answer: 2,
    explication: `El código va sumando a la variable count por cada vocal que
    se encuentra, por lo que al haber 4 vocales retorna el número
    4.`
};
const programmingConceptsSection= document.querySelector("#questionsProgrammingConcepts");
const javascriptSection= document.querySelector("#questionsJavascript")
const programminConcepts= [q1, q2, q3];
const javascript= [q4, q5, q6, q7];
for (let question of programminConcepts){
    addQuestion(programmingConceptsSection, question)
};
for (let question of javascript){
    addQuestion(javascriptSection, question)
};
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