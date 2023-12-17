//importar header
const fetchHeader = async () => {
    let headerFile= "header.html"
    response = await fetch(headerFile);
    while (!response.ok) {
        headerFile= "../"+ headerFile;
        response = await fetch(headerFile);
      }
  return response.text();
};
async function importHeader() {
    const headerContent = await fetchHeader();
    document.querySelector("header").innerHTML = headerContent;
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
    });
    const programmindLink= document.querySelector("#programmind");
    programmindLink.addEventListener("click", ()=>{
        changeVisibility("programmindHidden");
    });
  };

// Llama a la función importHeader() al cargar la página y activar modo claro
document.addEventListener("DOMContentLoaded", ()=>{
    importHeader();
    changeMode();
});
//Modo claro-oscuro
let modeButton= document.querySelector("#mode");
let src= modeButton.getAttribute("src");

//Change the source of the image
let changeImg=(search, replace)=>{
        return src.replace(new RegExp(search, "g"), replace);
};

//Cambiar modo
let changeMode= ()=>{
    if (document.documentElement.style.getPropertyValue("--background")== "#5e8178"){
        //Modo oscuro
        document.documentElement.style.setProperty("--background", "#1c1c1c");
        document.documentElement.style.setProperty("--h-color", "orangered");
        document.documentElement.style.setProperty("--text-color", "#8591c8");
        document.documentElement.style.setProperty("--h-color-2", "#4f65ca");
        document.documentElement.style.setProperty("--a-color", "#cc33cc");
        document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
        document.documentElement.style.setProperty("--news-color", "#8591c8");
        document.documentElement.style.setProperty("--news-border-color", "#4f65ca");
        document.documentElement.style.setProperty("--section-color", "#111111");
        modeButton.setAttribute("src", changeImg("dark","light"));
    }else{
        //Modo claro
        document.documentElement.style.setProperty("--background", "#5e8178");
        document.documentElement.style.setProperty("--h-color", "green");
        document.documentElement.style.setProperty("--section-color", "#c7c7c7");
        document.documentElement.style.setProperty("--text-color", "1c1c1c");
        document.documentElement.style.setProperty("--h-color-2", "red");
        document.documentElement.style.setProperty("--a-color", "#ddcedd");
        document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
        document.documentElement.style.setProperty("--news-color", "blue");
        document.documentElement.style.setProperty("--news-border-color", "#994fca");
        modeButton.setAttribute("src",changeImg("light", "dark"));
    };
};
modeButton.addEventListener("click", ()=>{
  changeMode();  
});