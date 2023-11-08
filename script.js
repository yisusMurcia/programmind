//Añadir preguntas a la sección de práctica de la página principal
let questDiv= document.querySelector("#questContainer")
const fecthFile = async () => {
    let headerFile= "prácticaDeProgramación/index.html"
    response = await fetch(headerFile);
  return response.text();
};
async function importContent() {
    const questContent = await fecthFile();
    document.querySelector("#questContainer").innerHTML = questContent;
};
document.addEventListener("DOMContentLoaded", importContent);