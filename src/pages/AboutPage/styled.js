import styled from 'styled-components/macro';
import { CopyContainer, MainTitle, Paragraph } from 'components/layout';
import { mediaQuery } from 'constants/mediaQuery';
import { colors, fonts } from 'constants/styleVariables';
import photo from 'assets/11.jpg';

export const Container = styled(CopyContainer)`
 ${mediaQuery.small} {
    padding: 0;
  }

  &:first-of-type {
    ${mediaQuery.small} {
      margin-top: -40px;
    }

    ${mediaQuery.medium} {
      margin-top: -40px;
    }

    ${mediaQuery.large} {
      margin-top: -80px;
    }

    ${mediaQuery.xlarge} {
      margin-top: -100px;
    }
  }


  ${MainTitle} {
    background: url(${photo}) top center;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${mediaQuery.small} {
      letter-spacing: -22px;
      font-size: 100px;
    }

    ${mediaQuery.large} {
      font-size: 120px;
    }
  }

  ${Paragraph} {
    max-width: 650px;
  }
`;

export const HobbyContainer = styled.div`
  padding: 100px 0;
  background-image: linear-gradient(to bottom, rgba(${colors.brand}, 0) 0%, rgba(${colors.brand}, 1) 100%);
`;

export const Text = styled.h1`
  font-size: 60px;
  background: transparent;
  background-size: cover;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  -webkit-text-stroke: 1px ${colors.brand};
`;

export const Quote = styled.a`
  font-size: 80px;
  background: transparent;
  background-size: cover;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  -webkit-text-stroke: 1px ${colors.brand};
  font-weight: ${fonts.weight.bold};
  text-align: right;
  margin-left: auto;
  max-width: 800px;
  transition: all 0.25s ease-in-out;
  transform: translateY(-132px);
}
  &:hover {
    background: url(${photo}) center center no-repeat;
    background-size: cover;
    -webkit-background-clip: text;
    color: transparent;
  }
`;