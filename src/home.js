import './css/home-style.css';

function createHome(){
    const element = document.createElement('div');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');

    h1.classList.add('title');
    h3.classList.add('subtitle');

    h1.textContent = "Good Food Restaurant";
    h3.textContent = "Asian Food";

    element.appendChild(h1);
    element.appendChild(h3);

    element.classList.add('heading');
    return element;
}

export default createHome;

