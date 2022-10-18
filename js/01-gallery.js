// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const images = galleryItems;

const createGalleryItem = ({preview, original, description}) =>
`<div class="gallery__item">

<a class="gallery__link modal" href="${original}">

        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>

</div>`;

const galleryMarkup = galleryItems.reduce(
    (acc, item) => acc + createGalleryItem(item),
    ""
);

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

// const instance = basicLightbox.create(
// 	document.querySelector('.modal')
// )

// const openModal = document.querySelector('.modal');
// openModal.addEventListener('click', instance.show);

