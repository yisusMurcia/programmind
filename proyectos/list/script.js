const inputsDiv= document.getElementById("inputs-container");
const setButton= document.querySelector("#set");
const addButton= document.querySelector("#add");
const selectButton= document.querySelector("#select");
const deleteButton= document.querySelector("#delete");
const result= document.getElementById("result");


const getValues= ()=>{
    let list= [];
    const inputs= document.querySelectorAll(".input");
    for (let input of inputs){
        if(!list.includes(input.value) && input.value!=""){
            list.push(input.value);
        };
    };
    if(list.length== 0){
        list= JSON.parse(localStorage.getItem("list"))
    }
    if (list.length< 2){
        result.innerText= 'Inserte más valores';
        return;
    };
    localStorage.setItem("list", JSON.stringify(list));
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
    return newList;
};

const getSomeItems=(num, arr)=>{
    return arr.slice(0, num);
};

addButton.addEventListener("click", ()=>{
    const input= document.createElement("input");
    input.classList.add("input")
    inputsDiv.appendChild(input);
});

deleteButton.addEventListener("click", ()=>{
    const inputs= document.querySelectorAll(".input");
    if (inputs.length >1){
        inputs[inputs.length-1].remove();
    };
});
setButton.addEventListener("click", ()=>{
    result.innerText= sortValues(getValues());
});
selectButton.addEventListener("click", ()=>{
    const selectionNum= document.getElementById("selection-num").value;
    result.innerText= getSomeItems(selectionNum, sortValues(getValues()));
});