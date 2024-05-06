let btn = document.createElement("button")

btn.classList.add("btn","btn-success")
btn.textContent="hola mundo"

const main = document.querySelector("main")
const hijoUno = document.querySelector("#hijo-uno")
const hijoDos = document.querySelector("#hijo-dos")

main.before(btn,null)
main.before(btn)