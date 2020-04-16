import React from 'react';
import PropTypes from 'prop-types';

import { Container, BackgroundContainer, Image, Overlay } from './styled';

const Background = ({ src, alt }) => {
  const renderDiv = (src, alt) => {
    let item = [];
    for (let i = 0; i < 4; i++) {
      item.push(
        <BackgroundContainer key={i}>
          <Image src={src} alt={alt} />
        </BackgroundContainer>
      );
    }
    return item;
  };

  return (
    <Container>
      {renderDiv(src, alt)}
      <Overlay />
    </Container>
  );
};

Background.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Background;
