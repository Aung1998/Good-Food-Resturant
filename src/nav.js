import './css/nav-style.css';

function createNavItem(name, link){
    let a = document.createElement('a');
    let li = document.createElement('li');
    li.classList.add('li');
    li.textContent = name
    a.appendChild(li);
    a.href = link
    a.classList.add('link');
    return a;
}

function createNavBar() {
    const nav = document.createElement('nav');
    nav.appendChild(createNavItem('Home', './index.html'));
    nav.appendChild(createNavItem('Menu', './menu.html'));
    nav.appendChild(createNavItem('Contact', './contact.html'));
    return nav;
}

function addNav(){
    const nav = createNavBar()
    nav.classList.add('nav');
    const content = document.querySelector('.content');
    document.body.insertBefore(nav, content);
}

export default addNav