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