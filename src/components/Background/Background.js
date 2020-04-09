import React from 'react';
import defaultSlide from 'assets/1.jpg';
import PropTypes from 'prop-types';

import {
  Container,
  BackgroundContainer,
  Image,
  Overlay,
} from './styled';

const Background = ({images}) => {

  const renderDiv = (src, alt) => {
    let item = [];
    for (let i = 0; i < 4; i++) {
      item.push(
        <BackgroundContainer 
          key={ i }
        >
          <Image 
            src={src} 
            alt={alt}
          />
        </BackgroundContainer> 
      );
    }
    return item;
  };
        
  return (
    <Container>
      {images !== undefined ? ( 
        renderDiv(
          images.urls.regular, 
          images.alt_description
        )) : (
        renderDiv(
          defaultSlide,
          'Hello! It\'s me!'
        )
      )}
      <Overlay />
    </Container>
  );
};


Background.propTypes = {
  images: PropTypes.object
};

export default Background;