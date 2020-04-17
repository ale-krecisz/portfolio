import React from 'react';
import PropTypes from 'prop-types';

import { Container, BackgroundContainer, Image, Overlay, Author } from './styled';

const Background = ({ src, alt, user }) => {
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
      {user && (
        <Author
          href={`${user.links.html}?utm_source=yourflow.pl&utm_medium=referral`}
          target="_blank"
        >
          Photo by {user.name}
        </Author>
      )}
      <Overlay />
    </Container>
  );
};

Background.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  user: {
    links: PropTypes.string,
    name: PropTypes.string,
  },
};

export default Background;
