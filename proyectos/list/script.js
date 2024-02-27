const inputsDiv= document.getElementById("inputs-container");
const setButton= document.querySelector("#set");
const addButton= document.querySelector("#add");
const selectButton= document.querySelector("#select");
const result= document.getElementById("result");

const getValues= ()=>{
    const list= []
    const inputs= document.querySelectorAll(".input");
    for (let input of inputs){
        list.push(input.value);
    };
    return list;
};

const sortValues= (list)=>{
    let copyList= [].concat(...list);
    const newList= [];
    while (newList.length!= list.length){
        const randomIndex= Math.floor(Math.random()* copyList.length);
        const item= copyList.splice(randomIndex, 1);
        newList.push(item);
    };
    return newList
}

addButton.addEventListener("click", ()=>{
    const input= document.createElement("input");
    input.classList.add("input")
    inputsDiv.appendChild(input);
});

setButton.addEventListener("click", ()=>{
    sortValues(getValues());
});

let list=[];
let newList=[];

let setItems=(times)=>{
    for (let i = 0; i < inputs.length-1; i++) {
        list.push(inputs[i].value);
    };
    while(newList.length!== times){
        let num= Math.floor(Math.random()*list.length);
        newList.push(list[num]);
        list.splice(num, 1);
    };
    let htmlList= document.createElement("ul");
    htmlList.setAttribute("id", "result")
    newList.forEach(element => {
        let item= document.createElement("li");
        item.innerText= element;
        htmlList.appendChild(item);
    });
    result.replaceWith(htmlList);
    list= [];
    newList= [];
};

let deleteButton= document.querySelector("#delete");
deleteButton.addEventListener("click", ()=>{
    alert(inputs.length)
    if (inputs.length >1){
        inputs[inputs.length-2].remove();
    };
});
setButton.addEventListener("click", ()=>{
    setItems(inputs.length-1)
});
selectButton.addEventListener("click", ()=>{
    let numOfItems= +inputs[inputs.length-1].value;
    setItems(numOfItems);
});