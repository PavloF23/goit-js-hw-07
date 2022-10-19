// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

// Створемо галарею
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

const galleryList = document.querySelector(".gallery");       // посилання на DOM
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);  // створення HTML розмітки?



galleryList.addEventListener('click', onGalleryItemClick);   //слухач скліка для відкриття модалки

// фунція  для відкритя модального вікна
function onGalleryItemClick(event) { 
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    } 
    
    const urlOfLargeImage = event.target.dataset.source;  // адреса зображення (data-source="${original})
    
    // сещсоння бібліотека basicLightbox, рендер модального вікна
    const instance = basicLightbox.create(`
    <img src="${urlOfLargeImage}" width="800" height="600">
    `)

    instance.show()

galleryList.addEventListener('keydown', event => {  // слухач ESC для закриття модалки
        if (event.code === 'Escape') 
            instance.close()
        })

}


    

