const inputs = document.querySelectorAll(".formularioTrabajo div div input")

inputs.forEach((input) => {
    input.addEventListener("focus", e => {
        e.preventDefault();
        input.classList.toggle("inputFocus")
    })
    input.addEventListener("blur", e => {
        input.classList.toggle("inputFocus")
    })
})

const textAreaMensaje = document.querySelector("#mensaje")
textAreaMensaje.addEventListener("focus", e => {
    e.preventDefault();
    textAreaMensaje.classList.toggle("inputFocus")
})
textAreaMensaje.addEventListener("blur", e => {
    textAreaMensaje.classList.toggle("inputFocus")
})