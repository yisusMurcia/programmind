let myProyects=[
    ["Números aleatorios", "proyectos/randomNums/index.html", "#myProyects"],
    ["listas", "proyectos/list/index.html", "#myProyects"],
    ["Cronómetro", "proyectos/chronometer/index.html", "#myProyects"],
    ["IA con Python 🐍", "proyectos/pythonIA/index.html", "#GitHubProyects", "proyectos/images/pythonIA.jpg"]
];
let button= document.querySelector(".moreContent");
let proyectsDiv= document.querySelector("#myProyects");
let GithubDiv= document.querySelector("#GitHubProyects");
myProyects.reverse();
button.remove();//Eliminar cuando haya otro proyecto
let i= 0;
do {
    let post= myProyects[i];
    let proyectsContent= document.querySelector(post[2]);
    let postDiv= document.createElement("div");
    postDiv.setAttribute("class", "post");
    let postTitle= document.createElement("p");
    postTitle.innerText= post[0];
    postDiv.appendChild(postTitle);
    proyectsContent.appendChild(postDiv);
    postDiv.addEventListener("click", ()=>location.href=post[1]);
    postDiv.style.backgroundImage= `url(${post[3]})`;
    i++;
} while (i< 4 || (proyectsDiv.children.length== 3 && GithubDiv.children.length== 3));
button.addEventListener("click", ()=>{
    proyectsDiv.innerHTML= "";
    GithubDiv.innerHTML= "";
    button.remove();
    for (let post of myProyects){
        let proyectsContent= document.querySelector(post[2]);
        let postDiv= document.createElement("div");
        postDiv.setAttribute("class", "post");
        let postTitle= document.createElement("p");
        postTitle.innerText= post[0];
        postDiv.appendChild(postTitle);
        proyectsContent.appendChild(postDiv);
        postDiv.addEventListener("click", ()=>location.href=post[1]);
        postDiv.style.backgroundImage= `url(${post[3]})`;
    };
});