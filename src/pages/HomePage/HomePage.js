import React, { useState, useEffect, useCallback } from 'react';
import unsplash from 'api/unsplash';

import defaultSlide from 'assets/1.jpg';

import Background from 'components/Background/Background';
import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import Paragraph from  'components/typography/Paragraph';
import CopyContainer from 'components/layout/CopyContainer';
import Notification from 'components/Notification';

import { HomeContainer, MainTitle, Highlight } from './styled';

let timer;

const defaultSet = [{
  urls: {
    regular: defaultSlide,
  },
  alt_desciption: 'it/s me',
}];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('forest');
  const [randomNumber, setRandomNumber] = useState(2);
  const [message, setMessage] = useState('');

  const getData = useCallback(async () => {
    setIsLoading(true);
    await unsplash.get('/search/photos', {
      params: { query: searchValue },
    }).then(result => {
      setImages(result.data.results);
      setRandomNumber(Math.floor(Math.random() * 10));
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }).catch(error => {
      setMessage(error);
    });
    return () => clearTimeout(timer);
  }, [searchValue]);


  useEffect(() => {
    getData();
  }, [searchValue, getData]);

  const onSearchSubmit = (searchValue) => {
    setSearchValue(searchValue);
  };

  const singleImage = images[randomNumber];

  return (
    <>
      { isLoading && <Loader /> }
      <Notification 
        isWarning
        message={message} />
      <HomeContainer>
        {singleImage && singleImage.urls ? (
          <Background 
            src={singleImage.urls.regular}
            alt={singleImage.alt_desciption}
          />
        ): (
          <Background 
            src={defaultSet[0].urls.regular}
            alt={defaultSet[0].alt_desciption}
          />
        )}
        
        <MainTitle>
          Hello world!
        </MainTitle>
        <CopyContainer>
          <Paragraph>
            <strong>I&apos;m Aleksandra, a Warsaw based front-end developer with designing background.</strong><br/><br/>
                      I love original design and creativity. My work has been varied – from websites and web apps to design, print and UX, but whatever I do, I always take a human-centered approach and a keen eye for detail.<br/><br/> I get inspired by nature, traveling and people. I like minimalism and simplicity, but I get that people need a bit of craziness in their lives. 
                      I&apos;m a big typography lover and I&apos;m into minimal design. I aim for a high quality, polished product to achieve my clients goals.
                      Let&apos;s get in touch whenever You want to talk with me, employ me or tell me a joke.
            <br/><br/><strong>Do You want to change <Highlight>the background?</Highlight></strong>
          </Paragraph>
          <SearchBar 
            onSubmit={onSearchSubmit}
          />
        </CopyContainer>
      </HomeContainer>
    </>

  );
};

export default HomePage;