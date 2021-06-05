const HIDDEN_CLASSNAME = 'hidden';
const OVERLAY_CLASSNAME = 'modal-overlay';

const overlay = document.createElement('div');
overlay.classList.add(OVERLAY_CLASSNAME)

const modal = document.createElement('div');
modal.classList.add('modal-content');

function close() {
    modal.classList.add(HIDDEN_CLASSNAME);

    modal.addEventListener('animationend', ()=>{
        modal.classList.remove(HIDDEN_CLASSNAME);
        overlay.remove();
    },{once:true});
}

export function float() {
    document.body.append(overlay);
}

function addCloseButton() {
    const button = document.createElement('button')
    button.textContent = 'X';
    button.addEventListener('click', close)

    const header = modal.querySelector('header');
    header.append(button);
}

function onKeydown(e) {
    if(e.key == 'Escape') close();
}

function onClick(e) {
    if(!e.target.classList.contains(OVERLAY_CLASSNAME)) return;

    close();
}

export function init(contentDOM) {
    overlay.addEventListener('click', onClick);
    window.addEventListener('keydown',onKeydown)

    modal.innerHTML = contentDOM.innerHTML;
    addCloseButton();

    overlay.append(modal);
}
