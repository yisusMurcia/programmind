let proyectsContent= document.querySelector("#myProyects");
let blogContent= document.querySelector("#blog");
let postNum= 4;
//Añadir proyectos
for (let i = 0; i < postNum; i++) {
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
};
//Añadir post del blog
for (let i= 0; i<postNum; i++){
    let post= document.createElement("div");
    post.setAttribute("class", "post");
    let postTitle= document.createElement("h3");
    postTitle.innerText= postArray[i][0];
    post.addEventListener("click", ()=>location.href=(postArray[i][1]));
    post.appendChild(postTitle);
    blogContent.appendChild(post);
    if (postArray[i][2]== undefined){
        post.style.backgroundImage= `url(../img/imagePreview.png)`;
    }else{
        post.style.backgroundImage= `url(${postArray[i][2]})`;
    };
};