//el postArray esta en otro archivo, se llama en el archivo html
let blogContent= document.getElementById("blogContent");
let addContent= document.querySelector(".moreContent");
for (let i= 0; i<4; i++){
    let post= document.createElement("div");
    post.setAttribute("class", "post");
    let postTitle= document.createElement("h3");
    postTitle.innerText= postArray[i][0];
    post.appendChild(postTitle);
    let postTag= document.createElement("p");
    postTag.innerText= postArray[i][1];
    post.appendChild(postTag);
    post.addEventListener("click", ()=>location.href=(postArray[i][2]));
    blogContent.appendChild(post);
    if (postArray[i][3]== undefined){
        post.style.backgroundImage= `url(../img/imagePreview.png)`;
    }else{
        post.style.backgroundImage= `url(${postArray[i][3]})`;
    };
};
addContent.addEventListener("click", ()=>{
    blogContent.innerHTML= "";
    for (let post of postArray){
        let postDiv= document.createElement("div");
        postDiv.setAttribute("class", "post");
        let postTitle= document.createElement("h3");
        postDiv.appendChild(postTitle);
        postTitle.innerText= post[0];
        let postTag= document.createElement("p");
        postTag.innerText= post[1];
        postDiv.appendChild(postTag);
        postDiv.addEventListener("click", ()=>location.href=(post[2]));
        blogContent.appendChild(postDiv);
        if (post[3]== undefined){
            postDiv.style.backgroundImage= `url(../img/imagePreview.png)`;
        }else{
            postDiv.style.backgroundImage= `url(${post[3]})`;
        };
    };
    addContent.remove();
});