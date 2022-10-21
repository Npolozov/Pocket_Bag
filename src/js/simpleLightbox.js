import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery_item a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
