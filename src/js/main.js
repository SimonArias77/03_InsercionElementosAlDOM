// ESTA FUNCIÒN ME AGREGA UN HIJO O ELEMENTO
function appendChildExample() {
    const btnExecute = document.getElementById("btn-execute")
    const main = document.querySelector('main')

    const btnExample = document.createElement("button")

    //clasic option
    btnExample.setAttribute("type", "button")

    //normal option
    btnExample.type = "button"

    //clasic option
    btnExample.classList.add("btn")
    btnExample.classList.add("btn-success")

    //normal option
    btnExample.classList.add("btn", "btn-success")

    btnExample.textContent = "Example"

    return btnExample

}

//click btn-execute #################
btnExecute.addEventListener('click', () => {
    const  btnExampleReturned = appendChildExample()
    main.appendChild(btnExampleReturned)
})
appendChildExample()

//ESTA FUNCIÒN ME ELIMINA UN HIJO O ELEMENTO
function removeChildExample() {
    const btnExample=document.querySelector(".btn-info")
    return btnExample

}

function createBtnSuccess() {

}

function callBtnInfo() {

}

btnExecute.addEventListener('click', () => {
    // const  btnExampleReturned = removeChildExample()
    // main.removeChild(btnExampleReturned)

    const actualElement =callBtnInfo()
    const newElement =createBtnSuccess()

    main.replaceChild(newElement,actualElement)
})

//NECESITA 2 ELEMENTOS EL HIJO EXISTENTE Y EL NUEVO O REEMPLAZO.
function replaceChildExample() {

}

//INSERTA ANTES DE LOS ELEMENTOS EXISTENTES A DIFERENCIA DEL append.
function insertBeforeExample() {

}

