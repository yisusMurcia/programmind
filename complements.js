window.addEventListener("load", ()=>{
    let header= document.querySelector("header");
    if(!header){
        header= document.createElement("header");
        document.body.main.before(header)
    };
    header.innerHTML= `<button class="menu" id="open">☰</button>
    <a href="https://yisusmurcia.github.io/programmind/index.html"><img id="programmind" src="https://yisusmurcia.github.io/programmind/img/programmind.svg" alt="programmind"></a>
    ${document.querySelector("title").innerText!= "Programmind"? "<h1>"+document.querySelector("title").innerText+"</h1>": ""}
    <nav id="navbar">
        <ul class="navList">
            <button class="menu" id="close">✖</button>
            <li class="noStyle nav-link">
                <a href="https://yisusmurcia.github.io/programmind/blog/index.html" class="webPage">Blog</a>
            </li>
            <li class="noStyle nav-link">
                <a href="https://yisusmurcia.github.io/programmind/proyectos/index.html" class="webPage">Proyectos</a>
            </li>
            <li class="noStyle nav-link">
                <a href="https://yisusmurcia.github.io/programmind/notas/index.html">Notas de actualización</a>
            </li>
        </ul>
    </nav>`
    const navbar= document.querySelector("#navbar");
    const openButton= document.querySelector("#open");
    const closeButton= document.querySelector("#close");
    openButton.addEventListener("click", ()=>{
            navbar.classList.add("visible");
    });
    closeButton.addEventListener("click", ()=>{
        navbar.classList.remove("visible");
    });
    //Footer
    let  footer= document.querySelector("footer");
    if (!footer){
        footer= document.createElement("footer");
        document.body.appendChild(footer);
    };
    document.getElementById("mode").remove();
    footer.innerHTML= `<nav>
        <a href="https://twitter.com/yisusMurcia" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/800px-X_logo_2023.svg.png" alt="x" class="socialMediaImg">
        </a>
        <a href="https://github.com/yisusMurcia" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" class="socialMediaImg">
        </a>
        <a href="https://www.threads.net/@_yisus_Murcia_" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/320px-Threads_%28app%29_logo.svg.png" alt="Threads" class="socialMediaImg">
        </a>
    </nav>
    <a href="https://github.com/yisusMurcia/programmind" class="a-button">Open source</a>
    <p>V 4.0</p>
    <img src="https://yisusmurcia.github.io/programmind/img/lightMode.png" alt="lightMode" id="mode">`;
    //Ligth mode
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
})