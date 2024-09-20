// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open () {
        // modalWrapper.classList.add('open')
        Modal.wrapper.classList.add('open')
    },
    close () {
        // modalWrapper.classList.remove('open')
        Modal.wrapper.classList.remove('open')
    }
}

// modalBtnClose.onclick = () => {
    // modalWrapper.classList.remove('open')
Modal.buttonClose.onclick = () => {
    Modal.close()
} 



/*
--Posso escrever das seguintes formas: 

window.addEventListener('keydown', event => {}) 
arrow function

OU:

window.addEventListener('keydown', function () {})
função anônima

OU, a forma que MAYK acha melhor, pois fica mais óbvio o
nome da função:
*/
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}
