const draggable = document.querySelector('.draggable');

function onDragstrat(e) {
    draggable.style.opacity = .3;
}

function onDragend(e) {
    draggable.style.opacity ='';
}

function onDragenter(e) {
    e.preventDefault();
    const dropZone = e.target;
    if(!dropZone.classList.contains('drop-zone')) return;

    dropZone.style.backgroundColor = '#ff5555';
    
}

function onDragleave(e) {
    const dropZone = e.target;
    if(!dropZone.classList.contains('drop-zone')) return;

    dropZone.style.backgroundColor = '';
}

function onDragover(e) {
    e.preventDefault();
}

function handleDrop(e) {
    const dropZone = e.target;
    if(!dropZone.classList.contains('drop-zone')) return;

    draggable.remove();
    dropZone.append(draggable);
    dropZone.style.backgroundColor = '';

}

if(draggable) {
    draggable.addEventListener('dragstart',onDragstrat);
    draggable.addEventListener('dragend',onDragend);

    document.addEventListener('dragenter',onDragenter);
    document.addEventListener('dragleave',onDragleave);
    document.addEventListener('dragover',onDragover)
    document.addEventListener('drop',handleDrop)
}


