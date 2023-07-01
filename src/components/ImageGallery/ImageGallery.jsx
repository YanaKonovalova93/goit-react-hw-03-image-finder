import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      <ImageGalleryItem imagesData={images} showModal={openModal} />
    </Gallery>
  );
};


ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};