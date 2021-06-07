function changeNetwork(e) {
    console.log(e)
}

window.addEventListener('online', changeNetwork);
window.addEventListener('offline', changeNetwork);
