//Los proyectos estan en otro script que se llama antes de este en el archivo html
let button= document.querySelector(".moreContent");
let proyectsContent= document.querySelector("#myProyects");
let i= 0;
do {
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
        postDiv.style.backgroundImage= `url(${post[3]})`;
    };
    i++;
} while (i< 2);
button.addEventListener("click", ()=>{
    proyectsContent.innerHTML= "";
    button.remove();
    for (let post of myProyects){
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
            postDiv.style.backgroundImage= `url(${post[3]})`;
        };
    };
});