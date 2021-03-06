const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener('input', e => {
    outputRef.textContent = inputRef.value;
    if (inputRef.value === ''){
        outputRef.textContent = 'незнакомец';
    }   
})
