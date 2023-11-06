let postArray=[
    ["Los pilares del Desarrollo Web", "https://programmind.notion.site/Los-pilares-del-desarrollo-Web-9e36696683884a70a8ac3e450db39c17?pvs=4"],
    ["Entendiendo HTML", "https://programmind.notion.site/Etiquetas-HTML-adcaf805227c4b4db6473cf817b445fd?pvs=4"],
    ["Primeros pasos en HTML", "https://programmind.notion.site/Primeros-pasos-en-HTMl-b712e24ac56d447faf63f7b2131d0c8a?pvs=4"],
    ["Un poco de estilo", "https://programmind.notion.site/Un-poco-de-estilo-76537578429a49f089ff847ffa096e27?pvs=4"],
    ["Agregando cometarios", "https://programmind.notion.site/Comentarios-ec4c2c2062ef4229a38d39270ed191e2?pvs=4"],
    ["Más que solo párrafos", "https://programmind.notion.site/HTML-es-m-s-que-p-rrafos-y-t-tulos-ac7ab7e1ed51448a941b521b6f40d016?pvs=4"],
    ["Definiendo el tamaño", "https://programmind.notion.site/Definiendo-el-tama-o-5cf14fa72a2c42799a12a43db6e816ff?pvs=4"],
    ["Agregando imágenes", "https://programmind.notion.site/Im-genes-34d1dcce90c44e4ba2cc6f809996ef4e?pvs=4"],
    ["Inteligencia Artificial", "blogPosts/IA/index.html"],
    ["El costo de ser bueno", "blogPosts/serBueno/index.html", "blogPosts/serBueno/img.jpg"],
    ["El sentido de la vida", "blogPosts/sentidoDeLavida/index.html", "blogPosts/sentidoDeLavida/img.jpg"],
    ["La necesidad de ser productivo", "blogPosts/productividad/index.html", "blogPosts/productividad/img.jpg"]
];
postArray.reverse();
let blogContent= document.getElementById("blogContent");
let addContent= document.querySelector(".moreContent");
for (let i= 0; i<4; i++){
    let post= document.createElement("div");
    post.setAttribute("class", "post");
    let postTitle= document.createElement("h3");
    postTitle.innerText= postArray[i][0];
    post.addEventListener("click", ()=>location.href=(postArray[i][1]));
    post.appendChild(postTitle);
    blogContent.appendChild(post);
    if (postArray[i][2]== undefined){
        post.style.backgroundImage= `url(../img/imagePreview.png)`;
    }else{
        post.style.backgroundImage= `url(${postArray[i][2]})`;
    };
};
addContent.addEventListener("click", ()=>{
    blogContent.innerHTML= "";
    for (let post of postArray){
        let postDiv= document.createElement("div");
        postDiv.setAttribute("class", "post");
        let postTitle= document.createElement("h3");
        postTitle.innerText= post[0];
        postDiv.addEventListener("click", ()=>location.href=(post[1]));
        postDiv.appendChild(postTitle);
        blogContent.appendChild(postDiv);
        if (post[2]== undefined){
            postDiv.style.backgroundImage= `url(../img/imagePreview.png)`;
        }else{
            postDiv.style.backgroundImage= `url(${post[2]})`;
        };
    };
    addContent.remove();
});