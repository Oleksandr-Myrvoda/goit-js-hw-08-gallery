const btnDecr = document.querySelector('#counter > button:first-child')
const btnIncr = document.querySelector('#counter > button:last-child')
const counterValue = document.querySelector('#value')
    
let counter = 0;

btnDecr.addEventListener('click', (e) => {
     counter -=  1;
     counterValue.textContent = counter;

})   

btnIncr.addEventListener('click', (e) => {
   counter +=  1;
   counterValue.textContent = counter;
})  
