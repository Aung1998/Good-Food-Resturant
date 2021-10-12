import addNav from "./nav";
import createHome from "./home";

document.body.style.background = "black";

function createPage(){
    addNav();
    const content = document.querySelector(".content");
    content.appendChild(createHome());
}

createPage()