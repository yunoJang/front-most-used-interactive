const input = document.querySelector('input');

let selection = '';

function handleBlur(e) {
    console.log('blur')
}

function onFocus(e) {
    console.log("focus")
}

function handleSelect(e) {
    const span = document.querySelector('span');
    selection = `${e.target.value.slice(e.target.selectionStart,e.target.selectionEnd)}`;

    span.textContent = `selection :${selection}`;
}

if(input) {
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', handleBlur) ;
    input.addEventListener('select', handleSelect);
}   