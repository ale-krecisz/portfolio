import React, {useState, useEffect} from 'react';

import Background from 'components/Background/Background';

import { imagesArray } from './imagesArray';
import { Spinner, Container } from './styled';

let timer;

const Loader = () => {
  let [number, setNumber] = useState(0);
  let singleImage = imagesArray[number];

  useEffect(() => {
    timer = setInterval(() => {
      setNumber(Math.floor(Math.random() * 18));
    }, 120);

    return () => clearInterval(timer);
  }, []);
  
  const {urls, alt_description} = singleImage;
  
  return (
    <Container>
      <Spinner />
      { urls && (
        <Background 
          src={urls.regular}
          alt={alt_description}
        />
      )}
    </Container>
  );
};

export default Loader;