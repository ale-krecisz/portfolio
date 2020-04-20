import styled from 'styled-components/macro';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery, mediaQueryHeight } from 'constants/mediaQuery';

export const MainTitle = styled.h1`
  font-size: 60px;
  color: ${colors.white};
  z-index: ${zIndex.content};
  font-weight: ${fonts.weight.bold};
  margin-bottom: 20px;

  ${mediaQueryHeight.medium} {
    font-size: 120px;
  }

  ${mediaQuery.medium} {
    font-size: 160px;
    white-space: nowrap;
    position: absolute;
    left: -45%;
    top: 50%;
    transform: rotate(-90deg);
    transform-origin: top center;
    margin: 0 auto;
    max-width: 100%;
  }
  ${mediaQuery.large} {
    left: -70%;
  }
`;
