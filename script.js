let modeButton= document.querySelector("#mode");
modeButton.addEventListener("click", ()=>{
    if (modeButton.getAttribute("src")== "img/darkMode.png"){
        document.documentElement.style.setProperty("--background", "#1c1c1c");
        document.documentElement.style.setProperty("--h-color", "orangered");
        document.documentElement.style.setProperty("--section-color", "black");
        document.documentElement.style.setProperty("--text-color", "#8591c8");
        document.documentElement.style.setProperty("--h2-color", "#4f65ca");
        document.documentElement.style.setProperty("--a-color", "#cc33cc");
        document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
        document.documentElement.style.setProperty("--footer-background", "#4b134b");
        document.documentElement.style.setProperty("--news-color", "#8591c8");
        document.documentElement.style.setProperty("--news-border-color", "#4f65ca");
        document.documentElement.style.setProperty("--aside-color", "purple");
        return modeButton.setAttribute("src", "img/lightMode.png");
    };
    document.documentElement.style.setProperty("--background", "#627e77");
    document.documentElement.style.setProperty("--h-color", "orange");
    document.documentElement.style.setProperty("--section-color", "#363636");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--h2-color", "orangered");
    document.documentElement.style.setProperty("--a-color", "#cc33cc");
    document.documentElement.style.setProperty("--a-color-hover", "#fa3efa");
    document.documentElement.style.setProperty("--footer-background", "#8d72b9");
    document.documentElement.style.setProperty("--news-color", "white");
    document.documentElement.style.setProperty("--news-border-color", "#994fca");
    document.documentElement.style.setProperty("--aside-color", "#994fca");
    modeButton.setAttribute("src", "img/darkMode.png");
});