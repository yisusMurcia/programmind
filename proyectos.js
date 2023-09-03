let myProyects=[
    ["Números aleatorios", "proyectos/randomNums/index.html"],
    ["listas", "proyectos/list/index.html"],
    ["Cronómetro", "proyectos/chronometer/index.html"],
    ["IA con Python 🐍", "proyectos/pythonIA/index.html", "proyectos/images/pythonIA.jpg"]
];
let button= document.querySelector(".moreContent");
let proyectsContent= document.querySelector("#myProyects");
myProyects.reverse();
if (button!= null){
    button.remove();//Eliminar cuando haya otro proyecto
};
let i= 0;
do {
    let post= myProyects[i];
    let postDiv= document.createElement("div");
    postDiv.setAttribute("class", "post");
    let postTitle= document.createElement("p");
    postTitle.innerText= post[0];
    postDiv.appendChild(postTitle);
    proyectsContent.appendChild(postDiv);
    postDiv.addEventListener("click", ()=>location.href=post[1]);
    postDiv.style.backgroundImage= `url(${post[2]})`;
    i++;
} while (i< 4);
button.addEventListener("click", ()=>{
    proyectsDiv.innerHTML= "";
    button.remove();
    for (let post of myProyects){
        let postDiv= document.createElement("div");
        postDiv.setAttribute("class", "post");
        let postTitle= document.createElement("p");
        postTitle.innerText= post[0];
        postDiv.appendChild(postTitle);
        proyectsContent.appendChild(postDiv);
        postDiv.addEventListener("click", ()=>location.href=post[1]);
        postDiv.style.backgroundImage= `url(${post[2]})`;
    };
});