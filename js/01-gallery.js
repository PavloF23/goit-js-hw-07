// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from './gallery-items.js';

// Change code below this line
// Створемо галарею

console.log(galleryItems);

const showSlide = document.querySelectorAll('.gallery__image');

const createGalleryItem = ({preview, original, description}) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
</div>`;

const galleryMarkup = galleryItems.reduce(
    (acc, item) => acc + createGalleryItem(item),
    ""
);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);


//отримання url великого зображення
document.addEventListener('click', event => {
   const type = event.target.dataset.source
   const instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}">
`)
    // console.log(event.target.dataset);
    instance.show()
})

