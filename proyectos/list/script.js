let inputsDiv= document.getElementById("inputConsole");
let inputs= document.getElementsByTagName("input");
let list=[];
let newList=[];
let setItems=(times)=>{
    let result= document.getElementById("result");
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
}
let addButton= document.querySelector("#add");
addButton.addEventListener("click", ()=>{
    inputsDiv.appendChild(document.createElement("input"));
});
let deleteButton= document.querySelector("#delete");
deleteButton.addEventListener("click", ()=>{
    alert(inputs.length)
    if (inputs.length >1){
        inputs[inputs.length-2].remove();
    };
});
let setButton= document.querySelector("#set");
setButton.addEventListener("click", ()=>{
    setItems(inputs.length-1)
});
let selectButton= document.querySelector("#select");
selectButton.addEventListener("click", ()=>{
    let numOfItems= +inputs[inputs.length-1].value;
    setItems(numOfItems);
});