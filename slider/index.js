import {init as sliderInit1} from './slider1.js';
import {init as sliderInit2} from './slider2.js';

const IMG_COUNT = 8;

// onload 효과없음
function loadImage(index){
    return new Promise((resolve, reject)=> {
        const image = new Image();
        image.src = `./images/${index+1}.jpg`;
        image.addEventListener('load', e=>resolve(image));
    })
}

async function loadImages() {
    const images = [];

    for(let i=0; i<IMG_COUNT; i++) {
        const image = await loadImage(i);

        images.push(image);
    }

    return images;
}

function init() {
    loadImages()
    .then(images=> sliderInit2(images))
} 
init();