//el postArray esta en otro archivo, se llama en el archivo html
let blogContent= document.getElementById("blogContent");
let addContent= document.querySelector(".moreContent");
for (let i= 0; i<4; i++){
    blogContent.innerHTML+= `<a class="post" id="${blogPosts[i].id}" href= "${blogPosts[i].link}index.html">
        <h3>${blogPosts[i].title}</h3>
        <p>${blogPosts[i].tag}</p>
    </a>`;
    const postEL= document.getElementById(blogPosts[i].id);
    postEL.style.backgroundImage= `url(${blogPosts[i].link}/img.jpg)`;
};
addContent.addEventListener("click", ()=>{
    blogContent.innerHTML= "";
    blogPosts.map((post)=>{
        blogContent.innerHTML+=`
        <a class="post" id="${post.id}" href= "${post.link}index.html">
        <h3>${post.title}</h3>
        <p>${post.tag}</p>
    </a>`;
    const postEL= document.getElementById(post.id);
    postEL.style.backgroundImage= `url(${post.link}/img.jpg)`;
    });
    addContent.remove();
});