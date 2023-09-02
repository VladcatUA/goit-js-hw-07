import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', handleClick);

const markupGallery = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", markupGallery);

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => { 
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
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
    
    const images = galleryItems.map(({ original, description }) => ({
            src: original,
            alt: description,
          }));

    const lightbox = new SimpleLightbox('.gallery a', {
            items: images,
            captionsData: 'alt',
            captionDelay: 250,
    });
        
    lightbox.on('show.simplelightbox', function () {
            lightbox.items.forEach((item, index) => {
              if (item.src === imageSource) {
                lightbox.showIndex(index);
              }
            });
          });
}
