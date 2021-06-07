const box = document.getElementById('box');

let [x,y] = [0,0];

function move() {
    box.style.transform = `translate(${x}px,${y}px)`
}

function movePos(e) {
    const moveX = e.movementX;
    const moveY = e.movementY;

    x += moveX;
    y += moveY;
    
    move();
}

function stopMoving(e) {
    x=0, y=0;
    move();
}

function handleMouseup(e){
    window.removeEventListener('mousemove',movePos)
}

function startMoving(e) {
    window.addEventListener('mousemove',movePos)
}

if(box) {
    box.addEventListener('mousedown',startMoving)
    window.addEventListener('mouseup',handleMouseup)
}