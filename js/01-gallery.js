import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', handleClick);

const markupGallery = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", markupGallery);

let instance = null;

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => { 
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="600"
      />
    </a>
    </li>`
}).join("");
}

function handleClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    }

    const targetImage = event.target.closest('.gallery__item');
    const imageSource = targetImage.querySelector('img').dataset.source;
    const imageInfo = galleryItems.find(galleryPhoto => 
        galleryPhoto.original === imageSource);
    
    instance = basicLightbox.create(`
        <div class="modal">
          <a class="gallery__link" href="${imageInfo.original}">
            <img
              class="gallery__image"
              src="${imageInfo.original}"
              data-source="${imageInfo.original}"
              alt="${imageInfo.description}"
            />
          </a>
        </div>
      `);
    
      instance.show();

document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.key === 'Escape' && instance) {
    instance.close();
    instance = null; 
    document.removeEventListener('keydown', handleKeyPress);
  }
}