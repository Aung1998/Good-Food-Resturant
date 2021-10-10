function createNavItem(name, link){
    let a = document.createElement('a');
    let li = document.createElement('li');
    li.textContent = name
    a.appendChild(li);
    a.href = link
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
    const content = document.querySelector('.content');
    document.body.insertBefore(nav, content);
}

export default addNav