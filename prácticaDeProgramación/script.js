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
        const text= document.createElement("b");
        text.innerHTML= obj.options[i];
        label.appendChild(text)
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