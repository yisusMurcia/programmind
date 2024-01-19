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
        element= document.querySelector(`#${element}`);
        element.classList.toggle("hidden");
        element.classList.toggle("visible");
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
});
//Modo claro-oscuro
let modeButton= document.querySelector("#mode");
let src= modeButton.getAttribute("src");

//Cambiar el src de la imagen
//Change the source of the image
let changeImg=(search, replace)=>{
        return src.replace(new RegExp(search, "g"), replace);
};

//Cambiar modo
//Change Mode
let darkMode= true
let changeMode= ()=>{
    if (darkMode){
        modeButton.setAttribute("src", changeImg("light","dark"));
        for (let element of document.querySelectorAll("*")){
            element.classList.add("ligth");
        };
        darkMode= false;
    }else{
        //Modo claro
        for (let element of document.querySelectorAll("*")) {
            element.classList.remove("ligth");
        };
        modeButton.setAttribute("src",changeImg("dark", "ligth"));
        darkMode= true;
    };
};
modeButton.addEventListener("click", ()=>{
  changeMode();  
});