import { GalleryItem, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imagesData: data, showModal }) => {
  return data.map(item => {
    return (
      <GalleryItem key={item.id}>
        <Img
          src={item.webformatURL}
          onClick={() => {
            showModal(item.largeImageURL);
          }}
        />
      </GalleryItem>
    );
  });
};


ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

