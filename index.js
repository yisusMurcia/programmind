let socialMediaImg= document.getElementsByClassName("socialMediaImg");
let socialMedia= ["https://twitter.com/theprogrammind", "https://github.com/yisusMurcia", "https://www.threads.net/@jesusantoniomurciaguzman"];
for (let i = 0; i < 3; i++) {
    socialMediaImg[i].addEventListener("click", ()=>window.open(socialMedia[i]));
};
let pages= document.getElementsByClassName("page");
let header= document.querySelectorAll(".header");
let proyectsDiv= pages[0];
let blogDiv= pages[1];
let proyectH= header[0];
let blogH= header[1];
blogH.addEventListener("click", ()=>location.href="blog.html");
proyectH.addEventListener("click", ()=>location.href="proyectos.html");
let updateNotes= document.getElementById("updateNotes");
updateNotes.addEventListener("click", ()=>location.href="notas.html");
for (let i=0; i<3; i++){
    let post= document.createElement("button");
    post.innerHTML= myProyects[i][0];
    post.addEventListener("click",()=> location.href= myProyects[i][1]);
    proyectsDiv.appendChild(post);
    let blogPost= document.createElement("button");
    blogPost.innerHTML= postArray[i][0];
    blogPost.addEventListener("click",()=> location.href= postArray[i][1]);
    blogDiv.appendChild(blogPost);
};