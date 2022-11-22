import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery_item a');
console.log(gallery);

let lightbox = new SimpleLightbox('.gallery_item a', {
  captions: true,
  // captionsData: 'alt',
  captionDelay: 250,
  heightRatio: 1,
});
