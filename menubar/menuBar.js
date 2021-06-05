const button = document.querySelector('.menu-bar-button');
const menuBar = document.querySelector('main .menu-bar');
const content = document.querySelector('main .content');

const MENUBAR_HIDDEN_CLASSNAME = 'menu-hidden';

function changeButtonText() {
    if(menuBar.hidden) {
        button.textContent = '👁‍🗨 Show Menu Bar';
    }
    else {
        button.textContent = '🥚 Hide Menu Bar';
    }
}

function handleClick() {
    menuBar.hidden = !menuBar.hidden;
    content.classList.toggle(MENUBAR_HIDDEN_CLASSNAME);
    changeButtonText();
}

button.addEventListener('click', handleClick);