const pannel = document.querySelector('.slider .pannel');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
const paging = document.querySelector('.slider .paging');
    
const ul = document.createElement('ul');
ul.classList.add('image-list');

const pannelStyle = window.getComputedStyle(pannel);

const IMG_WIDTH = Number(pannelStyle.width.slice(0,-2));
const FOCUS_CN ='focus';

let id = 0;
let images = [];

function renderPaging() {
    const children = paging.children;

    for(let i=0; i<children.length; i++) {
        children.item(i).classList.remove(FOCUS_CN);
    }

    children.item(id).classList.add(FOCUS_CN)
}

function renderImage() {
    ul.style.transform = `translate(-${IMG_WIDTH*id}px)`
}

function renderSlider() {
    renderImage();
    renderPaging();
}

function prevImage() {
    const nextId = id-1;
    id = nextId < 0 ? images.length-1 : nextId;

    renderSlider();
}

function nextImage() {
    const nextId = id+1;
    id = nextId >= images.length ? 0 : nextId;

    renderSlider();
}

function onPagingClick(e) {
    id = Number(e.target.dataset.index);

    renderSlider();
}

function paintPaging() {
    for(let i=0; i<images.length; i++) {
        const li = document.createElement('li');
        li.dataset.index = i;
        li.addEventListener('click',onPagingClick)

        if (i == id) li.classList.add(FOCUS_CN);

        paging.append(li);
    }
}

function paintImages() {
    images.forEach(img=>{
        const li = document.createElement('li');
        img.style.width = pannelStyle.width;
        img.style.height = pannelStyle.height;

        li.append(img);
        ul.append(li);
    })

    pannel.append(ul)
}

export function init(imageDoms=[]) {
    images = imageDoms;

    paintImages();
    paintPaging();
    next.addEventListener('click', nextImage);
    prev.addEventListener('click', prevImage);
}


export {paintPaging, onPagingClick}; 