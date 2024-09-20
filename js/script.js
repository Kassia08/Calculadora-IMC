import { Modal } from './modal.js'

// Variáveis - Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value 

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

// modalMessage.innerText = message
    // modalWrapper.classList.add('open')
    Modal.message.innerText = message
    Modal.open()
}

// Arrow function pode ser escrita da seguinte forma, sem as chaves {} :
// modalBtnClose.onclick = () => modalWrapper.classList.remove('open')


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

