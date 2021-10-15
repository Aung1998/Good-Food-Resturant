import './css/contact-style.css';
import addNav from "./nav";

function createContact(){
    const element = document.createElement('div');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');
    const address = document.createElement('p');
    const phone = document.createElement('p');

    h1.classList.add('title');
    h4.classList.add('contacttitle');
    address.classList.add('contactinfo');
    phone.classList.add('contactinfo');

    h1.textContent = "Good Food Restaurant";
    h4.textContent = "Address and Phone Number"
    address.textContent = "57th Avenue, Queens, NY, USA"
    phone.textContent = '(123) 456-7890'

    element.appendChild(h1);
    element.appendChild(h4);
    element.appendChild(address);
    element.appendChild(phone);

    element.classList.add('heading');
    return element;
}

document.body.style.background = "black";

function createPage(){
    addNav();
    const content = document.querySelector(".content");
    content.appendChild(createContact());
}

createPage()
