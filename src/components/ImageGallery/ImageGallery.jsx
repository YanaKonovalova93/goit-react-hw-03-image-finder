import { Gallery } from './ImageGallery.styled'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      <ImageGalleryItem imagesData={images} />
    </Gallery>
  );
};