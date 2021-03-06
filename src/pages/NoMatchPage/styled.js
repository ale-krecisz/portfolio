import styled from 'styled-components/macro';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';
import photo from 'assets/404.jpg';

export const TextContainer = styled.div`
  flex-direction: column;
`;

export const Text = styled.h1`
  color: ${colors.brandSecond};
  font-size: ${fonts.size.xLarge};
  font-weight: ${fonts.weight.bold};
  letter-spacing: 6px;
  line-height: 1;
  margin-bottom: 40px;
  max-width: 400px;
  text-transform: uppercase;
  z-index: ${zIndex.content};

  ${mediaQuery.medium} {
    font-size: ${fonts.size.xxxLarge};
    line-height: 0.85;
  }
`;

export const Lined = styled.span`
  background: url(${photo}) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  -webkit-text-stroke: 2px ${colors.brandSecond};

  ${mediaQuery.medium} {
    font-size: ${props => props.large && '180px'};
  }

  ${mediaQuery.large} {
    font-size: ${props => props.large && '200px'};
  }
`;

export const Container = styled.section`
  align-items: center;
  background: url(${photo}) center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 80px 40px;
  position: relative;

  ${mediaQuery.large} {
    &::before,
    &::after {
      content: '';
      width: 40px;
      height: 40px;
      border: 2px solid ${colors.brand};
      border-left: 0;
      border-bottom-width: 0;
      position: fixed;
      top: 20px;
      right: 20px;
    }

    &::after {
      top: auto;
      bottom: 20px;
      right: 20px;
      border-top: 0;
      border-bottom-width: 2px;
    }
  }

  ${mediaQuery.small} {
    padding: 80px 200px;
  }
`;
