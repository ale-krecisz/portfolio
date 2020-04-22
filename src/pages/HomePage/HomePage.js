import React, { useState, useEffect, useCallback } from 'react';
import unsplash from 'api/unsplash';
import useErrorHandler from 'context/notifications/useErrorHandler';

import defaultSlide from 'assets/1.jpg';

import Background from 'components/Background/Background';
import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import { Paragraph, Highlight, MainTitle } from 'components/layout';

import { HomeCopyContainer, HomeSection, Note } from './styled';

let timer;

const defaultSet = [
  {
    urls: {
      regular: defaultSlide,
    },
    alt_desciption: 'it/s me',
  },
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('forest');
  const [singleImage, setSingleImage] = useState(defaultSet[0]);

  const handleError = useErrorHandler();

  const getData = useCallback(async () => {
    setIsLoading(true);

    await unsplash
      .get('/search/photos', {
        params: { query: searchValue },
      })
      .then(result => {
        const randomNumber = Math.floor(Math.random() * result.data.results.length);
        setSingleImage(result.data.results[randomNumber]);

        timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch(error => {
        handleError(error);

        timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
    return () => clearTimeout(timer);
  }, [searchValue, handleError]);

  useEffect(() => {
    getData();
  }, [searchValue, getData]);

  const onSearchSubmit = searchValue => {
    setSearchValue(searchValue);
  };

  return (
    <>
      {isLoading && <Loader />}
      <HomeSection>
        {singleImage && singleImage.urls ? (
          <Background
            src={singleImage.urls.regular}
            alt={singleImage.alt_desciption}
            user={singleImage.user}
          />
        ) : (
          <>
            <Note>We don&apos;t have what You&apos;re looking for. Try again! </Note>
            <Background src={defaultSet[0].urls.regular} alt={defaultSet[0].alt_desciption} />
          </>
        )}

        <HomeCopyContainer>
          <MainTitle>
            Co tam <Highlight>?</Highlight>
          </MainTitle>
          <Paragraph>
            <strong>
              I&apos;m Aleksandra, a Warsaw based front-end developer with designing background.
            </strong>
            <br />
            <br />
            I love original design and creativity. My work has been varied – from websites and web
            apps to design, print and UX, but whatever I do, I always take a human-centered approach
            and a keen eye for detail.
            <br />
            <br />
            Let&apos;s get in touch whenever You want to talk with me, employ me or tell me a joke.
            <br />
            <br />
            <strong>
              Do You want to change <Highlight>the background?</Highlight>
            </strong>
          </Paragraph>
          <SearchBar onSubmit={onSearchSubmit} />
        </HomeCopyContainer>
      </HomeSection>
    </>
  );
};

export default HomePage;
