import { useContext } from 'react';
import PropTypes from 'prop-types';
import { modalContext } from '../../../context/context';
import './ImageGallery.css';

export default function ImageGalleryItem({ pictures }) {
  const { toggleModal } = useContext(modalContext);
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          onClick={toggleModal}
          className="ImageGalleryItem-image"
          loading="lazy"
          src={webformatURL}
          srcSet={largeImageURL}
          alt={tags}
        />
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array,

};
