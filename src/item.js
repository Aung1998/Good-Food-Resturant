import './css/menu-style.css';

function createItem(name, price, imgSrc){

    const img = new Image();
    img.src = imgSrc;
    img.classList.add("img");

    const head = document.createElement('h4');
    head.textContent = name;

    const priceDiv = document.createElement('div')
    priceDiv.textContent = `$${price}`;

    const item = document.createElement('div');
    item.appendChild(img);
    item.appendChild(head);
    item.appendChild(priceDiv)

    item.classList.add('item')

    return item;
}

export default createItem
