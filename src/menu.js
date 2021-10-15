import './css/menu-style.css';
import createItem from './item';
import addNav from "./nav";
import json from './data/menu.json'

document.body.style.background = "black";

function createMenu(){
    const menu_list = json.menu;

    const element = document.createElement('div');

    element.classList.add('menu')

    menu_list.forEach(menu =>{
        const item = createItem(menu.title, menu.price, menu.img)
        element.appendChild(item)
    })
    return element;
}

function createPage(){
    addNav();
    const content = document.querySelector(".content");
    content.appendChild(createMenu());
}

createPage()