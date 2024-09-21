export const AlertError = {
    element : document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}


// No script.js, faça o IMPORT desta pasta ALERT-ERROR