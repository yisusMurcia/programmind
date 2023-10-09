//Definir variables para el encabezado expanidble
const navbar= document.querySelector("#navbar");
const openButton= document.querySelector("#open");
const closeButton= document.querySelector("#close");
openButton.addEventListener("click", ()=>{
        navbar.classList.add("visible");
});
closeButton.addEventListener("click", ()=>{
    navbar.classList.remove("visible");
});
//Crear función hacer visible-invisible
let changeVisibility= (element)=>{
    element= document.querySelector(`#${element}`)
    if (element.classList.contains("visible")){
        return element.classList.remove("visible");
    };
    return element.classList.add("visible");
}
//Establecer elementos del header expandibles
const aboutLink= document.querySelector("#about");
aboutLink.addEventListener("click", ()=>{
    changeVisibility("aboutHidden");
});
const socialMediaLink= document.querySelector("#socialMedia");
socialMediaLink.addEventListener("click", ()=>{
    changeVisibility("socialMediaHidden");
})
const programmindLink= document.querySelector("#programmind");
programmindLink.addEventListener("click", ()=>{
    changeVisibility("programmindHidden");
})
