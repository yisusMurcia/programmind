let myProyects=[
    ["Números aleatorios", "proyectos/randomNums/index.html"],
    ["listas", "proyectos/list/index.html"],
    ["Cronómetro", "proyectos/chronometer/index.html"]
];
let proyectsContent= document.getElementById("myProyects");
let button= document.querySelector(".moreContent");
myProyects.reverse();
button.remove();//Eliminar cuando haya otro proyecto
for (let i = 0; i < 3; i++) {
    let post= myProyects[i];
    let postDiv= document.createElement("div");
    postDiv.setAttribute("class", "post");
    let postTitle= document.createElement("p");
    postTitle.innerText= post[0];
    postDiv.appendChild(postTitle);
    proyectsContent.appendChild(postDiv);
    postDiv.addEventListener("click", ()=>location.href=post[1]);
};
button.addEventListener("click", ()=>{
    proyectsContent.innerHTML="";
    button.remove();
    for (let post of myProyects){
        let postDiv= document.createElement("div");
        postDiv.setAttribute("class", "post");
        let postTitle= document.createElement("p");
        postTitle.innerText= post[0];
        postDiv.appendChild(postTitle);
        proyectsContent.appendChild(postDiv);
        postDiv.addEventListener("click", ()=>location.href=post[1]);
    };
});
let IAPost= document.querySelector("#IA");
IAPost.addEventListener("click", ()=>{location.href= "proyectos/pythonIA/index.html"});
IAPost.style.backgroundImage= 'url(proyectos/images/pythonIA.jpg)';