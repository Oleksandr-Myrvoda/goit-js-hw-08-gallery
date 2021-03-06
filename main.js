import images from "./src/gallery-items.js"

const refs = {
    gallery: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
    lightboxContent: document.querySelector(".lightbox__content"),
    lightboxImage: document.querySelector(".lightbox__image"),
    lightboxButton: document.querySelector(".lightbox__button"),
}

const elements = images.map(({original, preview, description}) => {   
    const imagesItem = `<li class="gallery__item"> 
<a class="gallery__link" 
    href='${original}'>
    <img class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt= '${description}'
    />
</a>
    </li>`;    
        return imagesItem;       
});

refs.gallery.insertAdjacentHTML('beforeend', elements.join(''));
console.log(refs.gallery);
// ======================================================
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.

refs.gallery.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    refs.lightbox.classList.add("is-open");

    refs.lightboxImage.src = e.target.dataset.source;
    refs.lightboxImage.alt = e.target.alt; 
    window.addEventListener("keydown", closeEsc)
})

// ==================================================
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.

refs.lightboxButton.addEventListener('click', closeLightBox)

// =====================================================
// Закрытие модального окна по клику на div.lightbox__overlay.

refs.lightboxOverlay.addEventListener('click', closeLightBox)


function closeLightBox () {
    
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';       
    window.removeEventListener("keydown", closeEsc)
}

// =============================================================
// Закрытие модального окна по нажатию клавиши ESC.


function closeEsc (evt) {
    if (evt.code !== 'Escape') {
        return;
    }
    closeLightBox();    
}

// ===========================================================
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
