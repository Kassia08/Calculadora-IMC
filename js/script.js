import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"

// Variáveis - Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value 

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError) {
        // console.log('mostrar o alerta de erro')
        AlertError.open()
        return;
    }
    //console.log(notANumber(weight))
    //console.log(notANumber(height))

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

// modalMessage.innerText = message
    // modalWrapper.classList.add('open')
    Modal.message.innerText = message
    Modal.open()
}

// Arrow function pode ser escrita da seguinte forma, sem as chaves {} :
// modalBtnClose.onclick = () => modalWrapper.classList.remove('open')



function notANumber(value) {
    return isNaN(value) || value == ""
}
/* 
-- Significa que se eu passar um valor de string, por exemplo,
ele vai falar que não é um número e a aplicação não irá funcionar se não for um número
-- No JS se colocar (""), valor vazio, ele considera um número,
por isso deve-se colocar o OU(representado por ||) == ""
*/


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

