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
//Modo claro-oscuro
let modeButton= document.querySelector("#mode");
let src= modeButton.getAttribute("src");
//Change the source of the image
let changeImg=(search, replace)=>{
        return src.replace(new RegExp(search, "g"), replace);
};
modeButton.addEventListener("click", ()=>{
    if (document.documentElement.style.getPropertyValue("--background")== "#5e8178"){
        document.documentElement.style.setProperty("--section-color", "111111");
        document.documentElement.style.setProperty("--background", "#1c1c1c");
        document.documentElement.style.setProperty("--h-color", "orangered");
        document.documentElement.style.setProperty("--text-color", "#8591c8");
        document.documentElement.style.setProperty("--h-color-2", "#4f65ca");
        document.documentElement.style.setProperty("--a-color", "#cc33cc");
        document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
        document.documentElement.style.setProperty("--news-color", "#8591c8");
        document.documentElement.style.setProperty("--news-border-color", "#4f65ca");
        modeButton.setAttribute("src", changeImg("dark","light"));
    }else{
        document.documentElement.style.setProperty("--background", "#5e8178");
        document.documentElement.style.setProperty("--h-color", "orange");
        document.documentElement.style.setProperty("--section-color", "#c7c7c7");
        document.documentElement.style.setProperty("--text-color", "1c1c1c");
        document.documentElement.style.setProperty("--h-color-2", "blue");
        document.documentElement.style.setProperty("--a-color", "#ddcedd");
        document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
        document.documentElement.style.setProperty("--news-color", "blue");
        document.documentElement.style.setProperty("--news-border-color", "#994fca");
        modeButton.setAttribute("src",changeImg("light", "dark"));
    };
});
