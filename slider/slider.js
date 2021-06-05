const pannel = document.querySelector('.slider .pannel');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
const paging = document.querySelector('.slider .paging');
    
const pannelStyle = window.getComputedStyle(pannel);

const IMG_COUNT = 8;

const FOCUS_CN ='focus';
const DIRECTION_CN = ['left-in','left-out','right-in','right-out'];
const LEFT = 0;
const RIGHT = 2;

let id = 0;
let currentImage = null;

function renderImage(dirction) {
    const HIDE_DIRCTION = dirction+1;

    const newImage = new Image(pannelStyle.width.slice(0,-2), pannelStyle.height.slice(0,-2));
    newImage.src = `./images/${id+1}.jpg`;

    currentImage.classList.add(DIRECTION_CN[HIDE_DIRCTION]);
    newImage.classList.add(DIRECTION_CN[dirction]);

    currentImage.addEventListener('animationend', ()=>{
        currentImage.remove();

        pannel.append(newImage);
        currentImage = newImage;
    });

    newImage.addEventListener('animationend', ()=>{
        newImage.classList.remove(DIRECTION_CN[dirction]);
    })
}

function renderPaging() {
    const children = paging.children;

    for(let i=0; i<children.length; i++) {
        children.item(i).classList.remove(FOCUS_CN);
    }

    children.item(id).classList.add(FOCUS_CN)
}

function renderSlider(dirction) {
    renderImage(dirction);
    renderPaging();
}

function prevImage() {
    const nextId = id-1;
    id = nextId < 0 ? IMG_COUNT-1 : nextId;

    renderSlider(LEFT);
}

function nextImage() {
    const nextId = id+1;
    id = nextId >= IMG_COUNT ? 0 : nextId;

    renderSlider(RIGHT);
}

function onPagingClick(e) {
    id = Number(e.target.dataset.index);

    renderSlider(RIGHT);
}

function paintPaging() {
    for(let i=0; i<IMG_COUNT; i++) {
        const li = document.createElement('li');
        li.dataset.index = i;
        li.addEventListener('click',onPagingClick)

        if (i == id) li.classList.add(FOCUS_CN);

        paging.append(li);
    }
}

function paintImage() {
    currentImage = new Image(pannelStyle.width.slice(0,-2), pannelStyle.height.slice(0,-2));
    currentImage.src = `./images/${id+1}.jpg`;

    pannel.append(currentImage);
}

export function init() {
    paintImage();
    paintPaging();
    next.addEventListener('click', nextImage);
    prev.addEventListener('click', prevImage);
}
init();