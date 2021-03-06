const sizeRef = document.querySelector('#font-size-control');
console.log(sizeRef)
const textRef = document.querySelector('#text');
console.log(textRef)

sizeRef.addEventListener('input', (e) => {
    console.log(e)
    textRef.style.fontSize = e.target.value+'px';
})
