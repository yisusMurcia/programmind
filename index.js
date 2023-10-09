const navbar= document.querySelector("#navbar");
const openButton= document.querySelector("#open");
const closeButton= document.querySelector("#close");
openButton.addEventListener("click", ()=>{
    navbar.classList.add("visible");
});
closeButton.addEventListener("click", ()=>{
    navbar.classList.remove("visible");
});
