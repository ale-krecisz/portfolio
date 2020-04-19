import React from 'react';

import PerspectiveText from 'components/PerspectiveText/PerspectiveText';
import { LayoutContainer, Paragraph, Highlight } from 'components/layout';
import { MainTitle, HomeCopyContainer } from './HomePage/styled';

const AboutPage = () => {
  return (
    <LayoutContainer>
      <PerspectiveText />
      <HomeCopyContainer>
        <MainTitle>
          <Highlight>안녕하세요</Highlight>
        </MainTitle>
        <Paragraph>
          <strong>
            I&apos;m Aleksandra, a <Highlight>Warsaw based front-end developer</Highlight> with
            designing background.
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
      </HomeCopyContainer>
    </LayoutContainer>
  );
};

export default AboutPage;
