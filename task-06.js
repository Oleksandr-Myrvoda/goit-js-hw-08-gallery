const inputRef = document.querySelector('#validation-input');

const validationRef = () => {
    inputRef.classList.remove('valid', 'invalid');
    if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
        inputRef.classList.add('valid')    
        // console.log('valid');
    } else {
        inputRef.classList.add('invalid')  
        // console.log('invalid');
    }    
}

inputRef.addEventListener('blur',validationRef);
