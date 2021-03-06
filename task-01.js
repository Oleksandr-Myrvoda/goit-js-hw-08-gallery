const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach((item) => {
    const text = item.firstElementChild.textContent
    console.log(text)
    const quantity = item.lastElementChild.children.length
    console.log(quantity)
 })
