let socialMediaImg= document.getElementsByClassName("socialMediaImg");
let socialMedia= ["https://twitter.com/theprogrammind", "https://github.com/yisusMurcia", "https://www.threads.net/@jesusantoniomurciaguzman", "https://www.instagram.com/theProgrammind/"];
let header= document.querySelectorAll(".header");
let proyectH= header[0];
let blogH= header[1];
postDiv= document.querySelector("#proyects");
let updateNotes= document.getElementById("updateNotes");
for (let i = 0; i < 3; i++) {
    socialMediaImg[i].addEventListener("click", ()=>window.open(socialMedia[i]));
};
blogH.addEventListener("click", ()=>location.href="blog.html");
proyectH.addEventListener("click", ()=>location.href="proyectos.html");
updateNotes.addEventListener("click", ()=>window.open("https://github.com/yisusMurcia/programmind/commits/main"));
//Práctica light mode
document.documentElement.style.setProperty("--background", "#627e77");
document.documentElement.style.setProperty("--h-color", "orange");
document.documentElement.style.setProperty("--section-color", "#363636");
document.documentElement.style.setProperty("--text-color", "#2beaccdf");