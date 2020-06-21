import React from 'react';

import PerspectiveText from 'components/PerspectiveText/PerspectiveText';
import { LayoutContainer, Paragraph, Highlight, MainTitle } from 'components/layout';
import { Container, HobbyContainer, Text, Quote } from './styled';

const musicLink = 'https://www.youtube.com/watch?v=BIzdtmPuLWg&list=PLF82671F789565902&index=14';

const AboutPage = () => {
  return (
    <LayoutContainer>
      <PerspectiveText
        firstLine="I am"
        secondLine="so cool"
        thirdLine="so smart"
        fourthLine="so awesome"
      />
      <Container>
        <MainTitle>
          안녕하세요
        </MainTitle>
        <Paragraph>
          <strong>
            I&apos;m Aleksandra, a <Highlight>Warsaw based front-end developer</Highlight> with
            design background.
          </strong>
          <br />
          <br />
          I love original design and creativity. My work has been varied – from websites and web
          apps to design, print and UX, but whatever I do, I always take a human-centered approach
          and a keen eye for detail.
          <br />
          <br /> I get inspired by nature, traveling and people. I like minimalism and simplicity,
          but I get that people need a bit of craziness in their lives. I&apos;m a big typography
          lover and I&apos;m into minimal design. I aim for a high quality, polished product to
          achieve my clients goals. Let&apos;s get in touch whenever you want to talk with me,
          employ me or tell me a joke.
          <br />
          <br />
        </Paragraph>
      </Container>
      <Container>
        <Quote href={musicLink} target="_blank">
          Chase your dreams not the competition
        </Quote>
      </Container>
      <HobbyContainer>
        <Text>What am I doing<br/> right now?</Text>

      </HobbyContainer>
    </LayoutContainer>
  );
};

export default AboutPage;
