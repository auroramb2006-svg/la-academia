const textAreaMensaje = document.querySelector("#mensaje")
textAreaMensaje.addEventListener("focus", e => {
    e.preventDefault();
    textAreaMensaje.classList.toggle("inputFocus")
})
textAreaMensaje.addEventListener("blur", e => {
    textAreaMensaje.classList.toggle("inputFocus")
})