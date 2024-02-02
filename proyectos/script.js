//Los proyectos estan en otro script que se llama antes de este en el archivo html
let button= document.querySelector(".moreContent");
let proyectsContent= document.querySelector("#myProyects");
let i= 0;
do {
    proyectsContent.innerHTML+=`
    <a class="post" id="${projects[i].id}" href= "${projects[i].link}index.html">
        <h3>${projects[i].title}</h3>
        <p>${projects[i].tag}</p>
    </a>`;
    const projectEl= document.getElementById(projects[i].id);
    projectEl.style.backgroundImage= `url(${projects[i].link}/img.jpg)`;
    i++;
} while (i< 4);
button.addEventListener("click", ()=>{
    proyectsContent.innerHTML= "";
    button.remove();
    projects.map((project)=>{
        proyectsContent.innerHTML+=`
    <a class="post" id="${project.id}" href= "${project.link}index.html">
        <h3>${project.title}</h3>
        <p>${project.tag}</p>
    </a>`;
    const projectEl= document.getElementById(project.id);
    projectEl.style.backgroundImage= `url(${project.link}/img.jpg)`;
    })
});