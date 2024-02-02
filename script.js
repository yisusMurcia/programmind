let proyectsContent= document.querySelector("#myProyects");
let blogContent= document.querySelector("#blog");
let postNum= 4;
//Arreglar ruta de los poryectos y post del blog
projects.map(project=>{project.link= "proyectos/"+ project.link});
blogPosts.map(post=>{post.link= `blog/`+ post.link;});

//Añadir proyectos
for (let i = 0; i < postNum; i++) {
    proyectsContent.innerHTML+=`
    <a class="post" id="${projects[i].id}" href= "${projects[i].link}index.html">
        <h3>${projects[i].title}</h3>
        <p>${projects[i].tag}</p>
    </a>`;
    const projectEl= document.getElementById(projects[i].id);
    projectEl.style.backgroundImage= `url(${projects[i].link}/img.jpg)`;
};
//Añadir post del blog
for (let i= 0; i<postNum; i++){
    blogContent.innerHTML+= `
    <a class="post" id="${blogPosts[i].id}" href= "${blogPosts[i].link}index.html">
        <h3>${blogPosts[i].title}</h3>
        <p>${blogPosts[i].tag}</p>
    </a>`;
    const postEL= document.getElementById(blogPosts[i].id);
    postEL.style.backgroundImage= `url(${blogPosts[i].link}/img.jpg)`;
};