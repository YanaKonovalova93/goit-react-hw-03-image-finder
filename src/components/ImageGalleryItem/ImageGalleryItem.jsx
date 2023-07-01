import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imagesData: data }) => {

    return data.map(item => {
      return (
        <GalleryItem key={item.id}>
          <Img
            src={item.webformatURL}
          />
        </GalleryItem>
      );
    });
};
