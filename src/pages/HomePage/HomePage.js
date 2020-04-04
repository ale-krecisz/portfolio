import React, { useState, useEffect, useCallback } from 'react';
import unsplash from 'api/unsplash';

import Background from 'components/Background/Background';
import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader';
import Paragraph from  'components/typography/Paragraph';
import CopyContainer from 'components/layout/CopyContainer';
import Notification from 'components/Notification';

import {HomeContainer, MainTitle} from './styled';

let timer;

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('buiding');
  const [randomNumber, setRandomNumber] = useState(2);
  const [message, setMessage] = useState('');


  const getData = useCallback(async () => {
    setLoading(true);
    await unsplash.get('/search/photos', {
      params: { query: searchValue },
    }).then(result => {
      setImages(result.data.results);
      // setMessage('Oh no, we don\'t have what You\'ve been looking for.');
      timer = setTimeout(() => {
        setLoading(false);
      }, 50);
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
    setRandomNumber(Math.floor(Math.random() * 10));
  };

  return (
    <HomeContainer>
      { loading && <Loader /> }
      <Notification 
        isWarning
        message={message} />
      <Background 
        images={images[randomNumber]}
      />
      <MainTitle
        mainPage
      >
                Hello world!
      </MainTitle>
      <CopyContainer>
        <Paragraph>
          <strong>I&apos;m Aleksandra, a Warsaw based front-end developer with designing background.</strong><br/><br/>
                    I love original design and creativity. My work has been varied – from websites and web apps to design, print and UX, but whatever I do, I always take a human-centered approach and a keen eye for detail.<br/><br/> I get inspired by nature, traveling and people. I like minimalism and simplicity, but I get that people need a bit of craziness in their lives. 
                    I&apos;m a big typography lover and I&apos;m into minimal design. I aim for a high quality, polished product to achieve my clients goals.
                    Let&apos;s get in touch whenever You want to talk with me, employ me or tell me a joke.
          <br/><br/><br/><strong>Do You want to change the background?</strong>
        </Paragraph>
        <SearchBar 
          onSubmit={onSearchSubmit}
        />
      </CopyContainer>
    </HomeContainer>

  );
};

export default HomePage;