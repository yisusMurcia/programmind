let myProyects=[
    ["Números aleatorios", "proyectos/randomNums/index.html"],
    ["listas", "proyectos/list/index.html"],
    ["Cronómetro", "proyectos/chronometer/index.html"]
];
let proyectsContent= document.getElementById("myProyects");
let button= document.querySelector(".moreContent");
if (myProyects.length< 4){
    button.remove();
};
myProyects.reverse();
for (let i = 0; i < 4; i++) {
    let post= myProyects[i];
    let postTitle= document.createElement("button");
    postTitle.setAttribute("class", "post")
    postTitle.innerText= post[0];
    proyectsContent.appendChild(postTitle);
    postTitle.addEventListener("click", ()=>location.href=post[1]);
};
button.addEventListener("click", ()=>{
    proyectsContent.innerHTML="";
    button.remove();
    for (let post of myProyects){
        let postTitle= document.createElement("button");
        postTitle.setAttribute("class", "post")
        postTitle.innerText= post[0];
        proyectsContent.appendChild(postTitle);
        postTitle.addEventListener("click", ()=>location.href=post[1]);
    };
});