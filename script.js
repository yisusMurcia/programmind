//Añadir proyectos a la página principal
let proyectsContent= document.querySelector("#myProyects")
for (let i = 0; i < 3; i++) {
    let post= myProyects[i];
    let postDiv= document.createElement("div");
    postDiv.setAttribute("class", "post");
    let postTitle= document.createElement("h3");
    postTitle.innerText= post[0];
    postDiv.appendChild(postTitle);
    let postLenguage= document.createElement("p");
    postLenguage.innerText= post[2];
    postDiv.appendChild(postLenguage);
    proyectsContent.appendChild(postDiv);
    postDiv.addEventListener("click", ()=>location.href=post[1]);
    if (post[3]== undefined){
        postDiv.style.backgroundImage= `url(../img/imagePreview.png)`;
    }else{
        postDiv.style.backgroundImage= `url(proyectos/${post[3]})`;
    };    
}